const { model, Schema } = require('mongoose');
const Joi = require('@hapi/joi');

const User = model("User", new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5],
        maxlength: [40]
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024
    },
    confirmed: {
        type: Boolean,
        default: false
    },
}));

const userValidator = (userData) => {
    const userSchema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2 })
            .required().min(5).max(40),
        password: Joi.string()
            .required().min(6).max(1024),
    });
    return userSchema.validate(userData);
}

module.exports = {
    User,
    userValidator,
}
