const { sign, verify } = require('jsonwebtoken');
const config = require('config');
const { error } = require('winston');

const createToken = (user) => {
    return sign({
      data: user._id,
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
    }, config.get("jwtPrivateKey"));
};

const verifyToken = (token) => {
    let user = null;
    try {
        user = verify(token, config.get("jwtPrivateKey"));  
    } catch (err) {
        error(err);
    }
    return user;
}

module.exports = {
    createToken,
    verifyToken
}