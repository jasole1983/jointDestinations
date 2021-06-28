'use strict';
module.exports = (sequelize, DataTypes) => {
  const evens = sequelize.define('evens', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    price: DataTypes.NUMBER,
    dispensaryId: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {});
  evens.associate = function(models) {
    // associations can be defined here
  };
  return evens;
};