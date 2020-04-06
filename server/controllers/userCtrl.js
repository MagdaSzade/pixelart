const { User, userValidator } = require("../models/userModel");

createUser = async (req, res) => {
    const { error } = userValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = new User({ email: req.body.email, password: req.body.password });
    user = await user.save();
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