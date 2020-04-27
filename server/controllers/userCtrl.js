const { User, userValidator } = require("../models/userModel");
const { transporter, createConfirmationMail } = require("../email");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require("config");

const webAdress = config.get("webAdress") || "http://localhost:9090";
const jwtKey = config.get("jwtPrivateKey") || "forTest";

createUser = async (req, res) => {
    console.log(req.body);
    const { error } = userValidator(req.body);
    if (error) return res.status(200).send(error.details[0].message);
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt)
    let user = new User({ email: req.body.email, password:  password});
    try {
        user = await user.save();
        jwt.sign(
            {id: user.id,
            exp: Math.floor(Date.now() / 1000) + (60 * 60)}, 
            jwtKey, 
            (err, token) => {
                console.log(token);
                const message = createConfirmationMail(user.email, `${webAdress}/api/user/confirmation/${token}`);
                transporter.sendMail(message);
            });
    } catch (err) {
        return res.status(200).send(err.message);
    }
    res.send("ok");
}

confirmation = (req, res) => {
    jwt.verify(
        req.params.token, 
        jwtKey,
        async (err, decoded) => {
            if (err) {
                return res.redirect(`${webAdress}`);
            }
            try {
               User.updateOne({ _id: decoded.id }, { confirmed: true }, (err, numAffected) => {
                   console.log("UPDATE!", numAffected);
               })
            } catch (err) {
                console.log(err.message);
            }
        });

    return res.redirect(`${webAdress}`);
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
    confirmation,
    getAllUsers,
    getUserByUsername,
    login,
    deleteUserById 
}