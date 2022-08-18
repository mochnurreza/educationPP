'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn('Quizzes', 'AnswerId',{
      type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Answers'
          },
          key: 'id'
      }
    })
  },

  down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn('Quizzes', 'AnswerId')
  }
};

