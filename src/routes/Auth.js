const express = require('express');
const ctrl = require('../controllers/AuthController');

const router = express.Router({ mergeParams: true });

router.route('/signin').post(ctrl.signin);

module.exports = router;
