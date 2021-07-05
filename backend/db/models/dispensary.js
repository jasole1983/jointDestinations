'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dispensary = sequelize.define('Dispensary', {
    name: {
      type: DataTypes.STRING(125),
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING(125),
      allowNull: false,
      unique: true,
    },
    hoursOfOperation: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    dispPhotoIds: {
      type: DataTypes.INTEGER,
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    medical: DataTypes.BOOLEAN,
  }, {});
  Dispensary.associate = function(models) {
    const columnMappingFlowers = {
      through: "JoinDIspFlow",
      other: "flowerId",
      foreignKey: "dispensaryId"
    }
    const columnMappingReviews = {
      through: "JoinReviewDispensary",
      other: "reviewId",
      foreignKey: "dispensaryId"
    }
    Dispensary.belongsToMany(models.Flower , columnMappingFlowers),
    Dispensary.belongsToMany(models.Review , columnMappingReviews),
    Dispensary.hasMany(models.DispensaryPhoto, {foreignKey: 'dispensaryId'})
  };
  return Dispensary;
};