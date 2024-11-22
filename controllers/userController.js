const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getUserInfo = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getUserInfo };
