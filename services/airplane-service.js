const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const e = require('express');
const { SuccessResponse } = require('../utils/common');

const airplaneRepo = new AirplaneRepository();


async function createAirplane(data){

    try {
        const airplane = await airplaneRepo.create(data);
        return airplane;
    } catch (error) {
        console.log(error);
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
         
            error.errors.forEach( (err) => {
                explanation.push(err.message)
            });
           
            throw new  AppError(explanation , StatusCodes.BAD_REQUEST);
        }
        throw new  AppError('Cannot create a new Airplane' , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}    

async function getAirplane(id){
 
    try {
        const airplane = await  airplaneRepo.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The current aiplane could not be fetch due to unavail" , error.statusCode)
        }
        throw new AppError("Cannot fetch the single  unavailable airplane" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirplanes(){
 
    try {
        const airplanes = await  airplaneRepo.getAll();
        return airplanes
    } catch (error) {
       
        throw new AppError("Cannot fetch data for all the airplanes" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyAirplane(id){
    
    try {
        const response = await airplaneRepo.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The require airplane could not be destroy due to unavail" , error.statusCode);
        }
        throw new AppError("Cannot destroy the unavailable airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(data , id) {
    try {
        const response = await airplaneRepo.update(data , id);
        return response
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The require airplane won't able to update" , error.statusCode);
        }
        throw new AppError("Cannot update the unavail airplane" , StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplane,
    getAirplanes,
    destroyAirplane,
    updateAirplane
};