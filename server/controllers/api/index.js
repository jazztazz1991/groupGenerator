const router = require('express').Router();

const requestRoutes = require('./requestRoutes');

console.log('api index hit');
router.use('/requests', requestRoutes);

module.exports = router;
