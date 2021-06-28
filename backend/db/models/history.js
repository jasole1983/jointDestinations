'use strict';
module.exports = (sequelize, DataTypes) => {
  const history = sequelize.define('history', {
    userId: DataTypes.INTEGER,
    action: DataTypes.STRING,
    counter: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    checkinId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {});
  history.associate = function(models) {
    // associations can be defined here
  };
  return history;
};