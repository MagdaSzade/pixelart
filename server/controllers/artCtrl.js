const { Art, artValidator } = require('../models/artModel');


saveArt = async (req, res) => {
    const reqArt = {
        pixels: req.body.pixels,
        width: req.body.width
    };
    if (!artValidator(reqArt)) {
        res.status(400).send();
    };
    let art = new Art({
        pixels: reqArt.pixels,
        width: reqArt.width
    });
    try {
        art = await art.save();
    } catch(err) {
        res.status(500).send(err.massage[0]);
    }
    res.status(201).send(art);
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