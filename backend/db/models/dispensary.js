'use strict';
module.exports = (sequelize, DataTypes) => {
  const dispensary = sequelize.define('dispensary', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    hoursOfOperation: DataTypes.ARRAY,
    happyHour: DataTypes.BOOLEAN,
    medical: DataTypes.BOOLEAN
  }, {});
  dispensary.associate = function(models) {
    // associations can be defined here
  };
  return dispensary;
};