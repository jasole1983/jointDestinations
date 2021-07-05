'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      comments: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      photoURL: {
        default: null,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: { model: 'Users'}
      },
      targetType: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['Flower', 'Event', 'Dispensary'],
      },
      flowerId: {
        default: null,
        type: Sequelize.INTEGER,
        reference: { model: 'Flowers'}
      },
      // localEventId: {
      //   default: null,
      //   type: Sequelize.INTEGER,
      //   reference: { model: 'Events'}
      // },
      dispensaryId: {
        default: null,
        type: Sequelize.INTEGER,
        reference: { model: 'Dispensaries'}
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
    return queryInterface.dropTable('reviews');
  }
};