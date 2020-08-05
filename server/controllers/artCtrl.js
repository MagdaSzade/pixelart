const { info } = require('winston');
const { Art, artValidator } = require('../models/artModel');
const { scrapeId } = require('../api');
const asyncMid = require('../middleware/asyncMid');



saveArt = asyncMid(async (req, res) => {
    if(req.body.pixels && req.body.width) {
        const reqArt = {
            pixels: req.body.pixels,
            width: req.body.width
        };
        if (!artValidator(reqArt)) {
            info('Invalid body req');
            return res.status(400).send();
        };
        let art = new Art({
            pixels: reqArt.pixels,
            width: reqArt.width
        });
        art = await art.save();
        info(`Save art id: ${art._id}`);
        setTimeout( async () => {
            const artTemp = await Art.findById(art._id);
            if (!artTemp.isPaid) {
                const isPaid = await scrapeId(artTemp._id);
                if(!isPaid) {
                    await Art.findByIdAndDelete(artTemp._id);
                    info(`Deleted art id: ${art._id}`);
                } else {
                    artTemp.isPaid = true;
                    info(`Change status to paid id: ${art._id}`);
                    artTemp.save();
                };
            };
        }, 600000);
        return res.status(201).send(art);
    };
    info('Invalid body req');
    return res.status(400).send();
}); 

isPaid = asyncMid(async (req, res) => {
    const art = await Art.findById(req.params.id);
    if (art.isPaid) {
        return res.status(200).send({ isPaid: art.isPaid });
    };
    if (art) {
        const isPaidScraped = await scrapeId(req.params.id);
        if (isPaidScraped) {
            art.isPaid = true;
            info(`Change status to paid id: ${art._id}`);
            art.save();
        };
        return res.status(200).send({ isPaid: art.isPaid });
    };
    return res.status(400).send();
});


getArt = asyncMid(async (req, res) => {
    const art = await Art.findById(req.params.id);
    if (art.isPaid) {
        return res.status(200).json(art).send();
    };
    return res.status(200).send();
});

module.exports = {
    saveArt,
    isPaid,
    getArt,
};