const repository = require('../repositories/userRepo');
const jwt = require('../utils/jwt');

const signin = async (req, res) => {
  try {
    const phone_number = req.body.phone_number.replace('+', '');
    const user = await repository.findUserByPhone(phone_number);
    if (!user.length) {
      return res.status(401).json({
        message: 'Authentication failed. User with this phone number not found.'
      });
    }

    if (req.body.password === user[0].password) {
      const userId = user[0].id;
      const token = jwt.sign({ userId });
      return res.json({ success: true, user, token });
    }
    return res.status(401).json({ success: false, msg: 'Authentication failed. Wrong password.' });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

module.exports = { signin };
