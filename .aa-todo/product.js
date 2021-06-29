'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    type: DataTypes.ENUM,
    price: DataTypes.DECIMAL,
    dispensaryId: DataTypes.INTEGER,
    flowerId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};