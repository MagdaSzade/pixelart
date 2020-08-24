const { User, userValidator } = require('../models/userModel'); 
const asyncMid = require('../middleware/asyncMid');
const { createHashedPassword } = require('../token/password');
const { createConfirmationMail } = require('../email');
const { info } = require('winston');

registerUser = asyncMid(async (req, res) => {
    if(req.body.email && req.body.password) {
        const reqUser = {
            email: req.body.email,
            password: req.body.password,
        }
        if (!userValidator(reqUser)) {
            info('Invalid body req');
            return res.status(400).send();
        }
        let user = new User({
            email: reqUser.email,
            password: await createHashedPassword(reqUser.password),
        });
        user = await user.save();
        createConfirmationMail(user);
        return res.status(200).send();
    }
    info('Invalid body req');
    return res.status(400).send();
});



module.exports = {
    registerUser,
}