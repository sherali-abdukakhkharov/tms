const express = require('express');
const ctrl = require('../controllers/UserController');

const router = express.Router({ mergeParams: true });

router.route('/').get(ctrl.getUsers).post(ctrl.insertUser);
router.route('/:id').get(ctrl.getUser).put(ctrl.updateUser).delete(ctrl.deleteUser);

module.exports = router;
