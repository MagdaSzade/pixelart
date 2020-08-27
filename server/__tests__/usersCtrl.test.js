const { checkIfConfirmed } = require('../controllers/usersCtrl');
const { User } = require('../models/userModel');

test('delete if not confirmed', async () => {
    let user = new User({
        email: 'tyst@testy.pl',
        password: 'blabla'
    })
    user = await user.save();
    checkIfConfirmed(user._id);
    const allUsers = await User.find({});
    console.log(allUsers);

})