'use strict';
module.exports = (sequelize, DataTypes) => {
  const flower = sequelize.define('flower', {
    commonName: DataTypes.STRING,
    botanicalName: DataTypes.STRING,
    imgURL: DataTypes.STRING,
    THC: DataTypes.NUMBER,
    strain: DataTypes.ENUM,
    reportedEffects: DataTypes.ARRAY
  }, {});
  flower.associate = function(models) {
    // associations can be defined here
  };
  return flower;
};