'use strict';
const fs = require ('fs')
module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let score = JSON.parse(fs.readFileSync('./data/score.json', 'utf-8'))
     .map(el => {
       return { ...el, createdAt: new Date(), updatedAt: new Date() }
     })
   return queryInterface.bulkInsert('Scores', score)
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Scores')
  }
};
