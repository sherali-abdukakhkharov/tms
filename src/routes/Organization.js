const express = require('express');
const ctrl = require('../controllers/OrganizationController');

const router = express.Router({ mergeParams: true });

router.route('/').get(ctrl.getOrganizations).post(ctrl.insertOrganization);
router
  .route('/:id')
  .get(ctrl.getOrganization)
  .put(ctrl.updateOrganization)
  .delete(ctrl.deleteOrganization);
router.route('/statistics/:id').get(ctrl.getStatistics);

module.exports = router;
