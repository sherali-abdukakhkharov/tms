const express = require('express');
const ctrl = require('../controllers/OrganizationUserController');

const router = express.Router({ mergeParams: true });

router.route('/').get(ctrl.getOrganizationUsers).post(ctrl.insertOrganizationUser);
router
  .route('/:id')
  .get(ctrl.getOrganizationUser)
  .put(ctrl.updateOrganizationUser)
  .delete(ctrl.deleteOrganizationUser);

module.exports = router;
