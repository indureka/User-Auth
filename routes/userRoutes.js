const express = require('express');
const { getUserInfo } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/profile', authenticateToken, getUserInfo);

module.exports = router;
