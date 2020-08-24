const { genSalt, hash } = require('bcrypt');

const createHashedPassword = async(password) => {
    const salt = await genSalt(10);
    return await hash(password, salt)
}


module.exports = {
    createHashedPassword,
}