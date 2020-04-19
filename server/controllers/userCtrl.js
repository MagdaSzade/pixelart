const { User, userValidator } = require("../models/userModel");
const { transporter, createConfirmationMail } = require("../email");

createUser = async (req, res) => {
    console.log(req.body);
    const { error } = userValidator(req.body);
    if (error) return res.status(200).send(error.details[0].message);
    let user = new User({ email: req.body.email, password: req.body.password });
    try {
        user = await user.save();
        const message = createConfirmationMail(user.email, "google.com");
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