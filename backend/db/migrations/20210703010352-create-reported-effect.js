'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ReportedEffects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Aroused: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Creative: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Energetic: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Euphoric: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Focused: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Giggly: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Happy: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Hungry: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Relaxed: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Sleepy: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Talkative: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Tingly: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Uplifted: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      flowerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Flowers" }
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
    return queryInterface.dropTable('ReportedEffects');
  }
};