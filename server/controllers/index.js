const router = require('express').Router();

const apiRoutes = require('./api/');

console.log('controller index hit');
router.use('/api', apiRoutes);

module.exports = router;
