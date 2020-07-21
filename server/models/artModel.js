const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const Art = mongoose.model("Art", new mongoose.Schema({
    pixels: {
        type: [String],
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    isPaid: {
        type: Boolean,
        default: false
    }
}));

const artShema =  Joi.object({
    pixels: Joi.string()
        .required(),
    width: Joi.number().min(5).max(20)
});

const artValidator = (art) => {
    if (artShema.validate(art)) {
        const values = ["red", "green", "yellow", "black", "blue", "purple", "orange", "white"];
        for (const pixel of art.pixels) {
            if(!values.includes(pixel)) {
                return false;
            };
        };
        return true;
    };
};

module.exports = {
    Art,
    artValidator
};