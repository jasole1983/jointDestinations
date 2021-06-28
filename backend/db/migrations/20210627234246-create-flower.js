'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commonName: {
        allowNull: false,
        type: Sequelize.STRING(75),
        unique: true,
      },
      botanicalName: {
        allowNull: false,
        type: Sequelize.STRING(125),
        unique: true,
      },
      imgURL: {
        type: Sequelize.STRING(255),
      },
      THC: {
        type: Sequelize.DECIMAL(3, 1)
      },
      strain: {
        allowNull: false,
        type: Sequelize.DataTypes.ENUM,
        values: ['Indica', 'Hybrid', 'Sativa'],
      },
      reportedEffects: {
        allowNull: false,
        type: Sequelize.STRING(13)
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
    return queryInterface.dropTable('flowers');
  }
};