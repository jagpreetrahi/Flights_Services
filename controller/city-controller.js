const {StatusCodes} = require('http-status-codes')
const {CityService, AirplaneService} = require('../services');



const {ErrorResponse , SuccessResponse} = require('../utils/common');



async function createCity(req , res){

    try {
        const response = await CityService.createCity({
            Name : req.body.Name
        })
        SuccessResponse.data = response;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse)
    }
}

async function  destroyCity(req , res) {
     try {
        const response = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = response;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
     } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse)
     }
}

async function updateCity(req ,res){

    try {
        const response = await CityService.updateCity({
            Name: req.body.Name
        } ,
        req.params.id
    );
    SuccessResponse.data = response;
    return res
    .status(StatusCodes.OK)
    .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse)
    }
}

module.exports = {
    createCity,
    destroyCity,
    updateCity
}
