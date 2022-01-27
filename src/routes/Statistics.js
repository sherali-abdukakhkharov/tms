const express = require('express');
const ctrl = require('../controllers/StatisticsController');

const router = express.Router({ mergeParams: true });

router.route('/').get(ctrl.getStatistics);
router.route('/organizations/:id').get(ctrl.getStatisticsByOrgId);
router.route('/projects').get(ctrl.getProjectStats);

module.exports = router;
