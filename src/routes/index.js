const express = require('express');
const userRoutes = require('./User');
const authRoutes = require('./Auth');
const orgRoutes = require('./Organization');
const orgUserRoutes = require('./OrganizationUser');

const router = express.Router({ mergeParams: true });

router.use('/users', userRoutes);
router.use('/organizations', orgRoutes);
router.use('/organizationUsers', orgUserRoutes);
router.use('/auth', authRoutes);

router.use('/', (req, res) => {
  res.write('<html><h1>Task Management System is only available as API</h1></html>');
  return res.end();
});

module.exports = router;
