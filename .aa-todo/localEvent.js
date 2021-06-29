'use strict';
module.exports = (sequelize, DataTypes) => {
  const LocalEvent = sequelize.define('LocalEvent', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    price: DataTypes.NUMBER,
    dispensaryId: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {});
  LocalEvent.associate = function(models) {
    // associations can be defined here
  };
  return LocalEvent;
};