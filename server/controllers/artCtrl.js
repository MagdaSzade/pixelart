const { Art, artValidator } = require('../models/artModel');


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

}, 

getArt = async (req, res) => {

};

module.exports = {
    saveArt,
    isPayed,
    getArt,
}