'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Flowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(75),
        unique: true,
      },
      imgURL: {
        type: Sequelize.STRING(255),
      },
      THC: {
        type: Sequelize.DECIMAL(4, 2)
      },
      strain: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['Indica', 'Hybrid', 'Sativa'],
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
    return queryInterface.dropTable('Flowers');
  }
};