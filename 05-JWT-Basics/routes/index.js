const express = require('express');
const { dashboard, login } = require('../controllers');
const router = express.Router();

const authentication = require('../middlewares/auth');

router.route('/dashboard').get(authentication, dashboard);
router.route('/login').post(login);

module.exports = router;
