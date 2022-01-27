const express = require('express');
const userRoutes = require('./User');
const authRoutes = require('./Auth');

const router = express.Router({ mergeParams: true });

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

router.use('/', (req, res) => {
  res.write('<html><h1>Task Management System is only available as API</h1></html>');
  return res.end();
});

module.exports = router;
