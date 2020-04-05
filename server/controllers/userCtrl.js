const User = require("../models/userModel");

createUser = (req, res) => {
    console.log(req.body);
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