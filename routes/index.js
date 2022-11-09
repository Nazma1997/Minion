const router = require('express').Router()

// routes 
const minionRoutes = require('./minion');

//Use all routers
// router.use('/api/v1/sliders', sliderRoutes);
router.use('/api/v1/minions', minionRoutes);


module.exports = router