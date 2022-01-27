const express = require('express');
const ctrl = require('../controllers/TaskController');

const router = express.Router({ mergeParams: true });

router.route('/').get(ctrl.getTasks).post(ctrl.insertTask);
router.route('/:id').get(ctrl.getTask).put(ctrl.updateTask).delete(ctrl.deleteTask);

module.exports = router;
