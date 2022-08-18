'use strict';
const fs = require('fs')
module.exports = {
  up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let answer = JSON.parse(fs.readFileSync('./data/answer.json', 'utf-8'))
      .map(el => {
        return { ...el, createdAt: new Date(), updatedAt: new Date() }
      })
    return queryInterface.bulkInsert('Answers', answer)
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Answers')
  }
};
