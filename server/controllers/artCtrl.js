const { Art, artValidator } = require('../models/artModel');
const { scrapeId } = require('../api');


saveArt = async (req, res) => {
    if(req.body.pixels && req.body.width) {
        const reqArt = {
            pixels: req.body.pixels,
            width: req.body.width
        };
        if (!artValidator(reqArt)) {
            return res.status(400).send();
        };
        let art = new Art({
            pixels: reqArt.pixels,
            width: reqArt.width
        });
        try {
            art = await art.save();
        } catch(err) {
            return res.status(500).send(err.massage[0]);
        }
        setTimeout( async () => {
            const artTemp = await Art.findById(art._id);
            if (!artTemp.isPaid) {
                try {
                    const isPaid = await scrapeId(artTemp._id);
                     if(!isPaid) {
                        await Art.findByIdAndDelete(artTemp._id);
                     } else {
                         artTemp.isPaid = true;
                         artTemp.save();
                     }
                    
                } catch (err) {
                    console.log(err.massage);
                }
            }
        }, 600000);
        return res.status(201).send(art);
    } return res.status(400).send();
}; 

isPaid = async (req, res) => {
    try {
        const art = await Art.findById(req.params.id);
            if (art.isPaid) {
                return res.status(200).json({ isPaid: art.isPaid}).send();
            }
            if (art) {
                const isPaid = 
                    { isPaid: await scrapeId(req.params.id) };
                res.status(200).json(isPaid).send();
                if (isPaid.isPaid) {
                    art.isPaid = true;
                    art.save();
                }
                return
            } 
            res.status(400).send();
    } catch (err) {
        res.status(400).send();
    }
};


getArt = async (req, res) => {
    try {
        const art = await Art.findById(req.params.id);
            if (art.isPaid) {
                return res.status(200).json(art).send();
            } 
            res.status(400).send();
    } catch (err) {
        res.status(400).send();
    }
};

module.exports = {
    saveArt,
    isPaid,
    getArt,
};