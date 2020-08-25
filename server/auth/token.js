const { sign, verify } = require('jsonwebtoken');

const createToken = (user) => {
    return sign({
      data: user._id,
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
    }, 'secret');
};

const veryfyToken = (token) => {
    let user = {};
    try {
        user = verify(token, config.get("jwtPrivateKey"))
    } catch (err) {
    }
    return user;
}

module.exports = {
    createToken,
    veryfyToken
}