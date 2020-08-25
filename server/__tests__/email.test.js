const { createURL, createConfirmationMail } = require('../email/index');

test('create valid confirmation url', () => {
    const user = {
        _id: "5f43a7828a569b31e8e52db7",
        email: "forspamonly234@gmail.com"
    }
    expect(createURL(user).includes('http://localhost:9090/api/users/confirm/')).toBe(true);
});

test('send email', async () => {
    const user = {
        _id: "5f43a7828a569b31e8e52db7",
        email: "forspamonly234@gmail.com"
    }
    const info = await createConfirmationMail(user);
    expect(info.accepted[0]).toMatch('forspamonly234@gmail.com');
})
