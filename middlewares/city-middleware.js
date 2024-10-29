const {StatusCodes} = require('http-status-codes')

const AppError = require('../utils/errors/app-error')
const {ErrorResponse} = require('../utils/common')


function validateCity(req , res ,next){
    if(!req.body.Name){
        console.log(req.body.Name)
        ErrorResponse.message = "Something went wrong";
        ErrorResponse.error = new AppError("Model Number not found in upcoming request" ,StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    next()
     
}

module.exports = {
    validateCity
}