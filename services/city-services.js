const {CityRepository} = require('../repositories');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

const cityRepo = new CityRepository();


async function  createCity(data){
   
    try {
        const city = await cityRepo.create(data);
        return city;
    } catch (error) {
        
        if(error.name == 'SequelizeValidateError' ||  error.name == 'SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach( (err) => {
                explanation.push(err.message)
            });

            throw new AppError(explanation , StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id){
     
    try {
        const response  = await cityRepo.destroy(id);
        return response
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The require city could not be destroy due to unavail" , error.statusCode);
        }
        throw new AppError("Cannot destroy the city due to unavail" , StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function updateCity(data , id) {
    
    try {
        const response = await cityRepo.update(data , id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The require city could not be update due to unavail" , error.statusCode)
        }

        throw new AppError("cannot update the city due to un exists", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
    destroyCity,
    updateCity
}