'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dispensaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {      
        allowNull: false,
        type: Sequelize.STRING(125),
        unique: true,
      },
      address: {
        type: Sequelize.STRING(125),
        allowNull: false,
        unique: true,
      },
      hoursOfOperation: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      dispPhotoIds: {
        type: Sequelize.INTEGER,
        reference: { model: 'DispensaryPhotos' }
      },
      happyHour: {
        allowNull: true,
        default: null,
        type: Sequelize.STRING(15),
      },
      medical: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      website: {
        type: Sequelize.STRING(255),
        allowNull: true,
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
    return queryInterface.dropTable('Dispensaries');
  }
};