'use strict';
const {Op} = require('sequelize')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('cities' , [
        {
           Name : "Maharashtra",
           createdAt : new Date(),
           updatedAt : new Date()
        },
        {
          Name : "Punjab",
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          Name : "Delhi",
          createdAt : new Date(),
          updatedAt : new Date()
        }
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('cities' ,{[Op.or] : [{Name : "Punjab"} , {Name: "Maharashtra"}, {Name: "Delhi"} ]} )
  }
};
