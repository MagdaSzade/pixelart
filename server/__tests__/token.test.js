const { createToken } = require('../email/index');

test('create token', () => {
    const user = {
        _id: "5f43a7828a569b31e8e52db7",
        email: "forspamonly1234@gmail.com",
        password: "password",
    }
    console.log(createToken(user));
})