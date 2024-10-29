const { where } = require('sequelize');
const {Logger} = require('../config/logger');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('.');

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        console.log(data);
        const response = await this.model.create(data)
        if(!response){
            throw new AppError("Not able to find out the airplane" , StatusCodes.NOT_FOUND);
        }
        return response;
       
    }

    async destroy(data){
       
            const response = await this.model.destroy({
                where: {
                    id : data
                }
            });
            if(!response){
                throw new AppError("Not able to find out the airplane" , StatusCodes.NOT_FOUND);
            }
            return response
       
    }
  
   async update(data , id){
         const response = await this.model.update(data , {
            where :  {
                id : id
            }
         });
        if(!response){
            throw new AppError("Not able to find out the airplane for update" , StatusCodes.NOT_FOUND)
        }
        return response;
   }

    async get(data){
      
            const response = await this.model.findByPk(data);
            if(!response){
                throw new AppError("Not able to find out the airplane" , StatusCodes.NOT_FOUND);
            }
            return response
        
    }

    async getAll(){
        
            const response = await this.model.findAll();
           
            if(!response){
                throw new AppError("Not able to find out the airplane" , StatusCodes.NOT_FOUND);
            }
            return response;
       
    }
}

module.exports = CrudRepository;