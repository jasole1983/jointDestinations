'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JoinDispFlows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dispensaryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: { model: 'Flowers'},
      },
      flowerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: { model: 'Dispensaries'},
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
    return queryInterface.dropTable('JoinDispFlows');
  }
};