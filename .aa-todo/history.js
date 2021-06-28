'use strict';
module.exports = (sequelize, DataTypes) => {
  const history = sequelize.define('history', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    action: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ['reviewId', 'localEventId', 'checkInId', 'listId'],
    },
    actionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    counter: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
  }, {});
  history.associate = function(models) {
    // associations can be defined here
    History.belongsTo( models.User, { foreignKey: 'userId' })
  };
  return history;
};