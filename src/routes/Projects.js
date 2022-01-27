const express = require('express');
const ctrl = require('../controllers/ProjectController');

const router = express.Router({ mergeParams: true });

router.route('/').get(ctrl.getProjects).post(ctrl.insertProject);
router.route('/:id').get(ctrl.getProject).put(ctrl.updateProject).delete(ctrl.deleteProject);

module.exports = router;
