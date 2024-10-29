const {StatusCodes} = require('http-status-codes');
const { error } = require('winston');

const AppError = require('../utils/errors/app-error');
const  { ErrorResponse} = require('../utils/common')


function validateCreateRequest(req , res ,next){
    if(!req.body.modelNumber){
        
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError("Model Numbe not found in upcoming request" ,StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    else if(!req.body.capacity){
        console.log(error);
        ErrorResponse.error = new AppError("Model Numbe not found in upcoming request" ,StatusCodes.BAD_REQUEST);
        ErrorResponse.message = "Something went wrong";
        return  res
           .status(StatusCodes.BAD_REQUEST)
           .json(ErrorResponse)
    }

    next();
}

module.exports = {
    validateCreateRequest
}