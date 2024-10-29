const express = require('express');

const router = express.Router();

const {AirplaneController} = require('../../controller')

const {ValidateRequest} = require('../../middlewares');


router.post('/' ,
    ValidateRequest.validateCreateRequest ,
    AirplaneController.createAirplane);

router.get('/:id' ,
    AirplaneController.getAirplane
);   

router.get('/' ,
    AirplaneController.getAirplanes
);

router.delete('/:id' ,
    AirplaneController.destroyAirplane
)

router.patch('/:id' , 
    AirplaneController.updateAirplane
)

module.exports = router;