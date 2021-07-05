'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JoinReviewDispensaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dispensaryId: {
        type: Sequelize.INTEGER,
        references: { model: "Dispensaries" },
      },
      reviewId: {
        type: Sequelize.INTEGER,
        references: { model: "Reviews" },
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
    return queryInterface.dropTable('JoinReviewDispensaries');
  }
};