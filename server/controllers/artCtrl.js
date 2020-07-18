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
        return res.status(201).send(art);
    } return res.status(400).send();
}, 

isPayed = async (req, res) => {
    try {
        const art = await Art.findById(req.params.id);
        console.log(art);
            if (art) {
                const isPayed = 
                    { isPayed: await scrapeId(req.params.id) };
                console.log(isPayed);
                res.status(200).json(isPayed).send();
                if (isPayed.isPayed === true) {
                    art.isPayed = true;
                    art.save();
                }
                return
            } 
            res.status(400).send();
    } catch (err) {
        res.status(400).send();
    }
    
    
}, 

getArt = async (req, res) => {

};

module.exports = {
    saveArt,
    isPayed,
    getArt,
}