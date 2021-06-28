'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: { model: 'Users'}
      },
      action: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['reviewId', 'localEventId', 'checkInId', 'listId']
      },
      actionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      counter: {
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('histories');
  }
};