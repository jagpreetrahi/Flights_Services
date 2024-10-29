const express = require('express');

const router = express.Router();

const {InfoController} = require('../../controller');

const  airplaneRoutes = require('./airplane-routes');

const cityRoutes = require('./city-routes');

router.use('/city' , cityRoutes);

router.use('/airplane' , airplaneRoutes);



router.get('/info' , InfoController.info)


module.exports = router;