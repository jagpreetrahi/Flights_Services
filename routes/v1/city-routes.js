const express = require('express');

const router = express.Router();

const {CityController} = require('../../controller');

const {CityMiddleware} = require('../../middlewares');


router.post('/' ,
    CityMiddleware.validateCity,
    CityController.createCity
)

router.delete('/:id' ,
    CityController.destroyCity
)

router.patch('/:id' ,
    CityController.updateCity
)

module.exports = router;




