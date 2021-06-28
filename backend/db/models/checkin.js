'use strict';
module.exports = (sequelize, DataTypes) => {
  const checkin = sequelize.define('checkin', {
    userId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    target: DataTypes.STRING,
    photoURL: DataTypes.STRING
  }, {});
  checkin.associate = function(models) {
    // associations can be defined here
  };
  return checkin;
};