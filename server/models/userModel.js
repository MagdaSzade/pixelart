const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const User = mongoose.model("User", new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true,
    minlength: [3, 'Your email is too short'],
    maxlength: [200, 'Your email is too long!']
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
  }
}, ));



function userValidator(userData) {
    const userSchema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2 }),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9\d\W]{6,15}$'))
    });
    return Joi.validate(userData, userSchema);
}


exports.User = User;
exports.userValidator = userValidator;