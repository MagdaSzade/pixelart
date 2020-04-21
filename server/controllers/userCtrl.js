const { User, userValidator } = require("../models/userModel");
const { transporter, createConfirmationMail } = require("../email");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require("config");

createUser = async (req, res) => {
    console.log(req.body);
    const { error } = userValidator(req.body);
    if (error) return res.status(200).send(error.details[0].message);
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt)
    let user = new User({ email: req.body.email, password:  password});
    try {
        user = await user.save();
        const token = jwt.sign({id: user.id}, config.get("jwtPrivateKey"));
        const message = createConfirmationMail(user.email, `http://localhost:3000/confirmation/${token}`);
        console.log(message);
        await transporter.sendMail(message);
    } catch (err) {
        return res.status(200).send(err.message);
    }
    res.send("ok");
}

getAllUsers = (req, res) => {
    res.send("ok");
}

getUserByUsername = (req, res) => {
    res.send("ok");
}

login = (req, res) => {
    res.send("ok");
}

deleteUserById = (req, res) => {
    res.send("ok");
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByUsername,
    login,
    deleteUserById 
}