'use strict';

// const { default: AddFlowerForm } = require("../../../frontend/src/components/AddFlower");
// const { FlowerModal } = require("../../../frontend/src/context/NewFlowerModal");

module.exports = (sequelize, DataTypes) => {
  const Flower = sequelize.define('Flower', {
    name: {type: DataTypes.STRING(75), allowNull: false, unique: true},
    imgURL: DataTypes.STRING(255),
    THC: DataTypes.DECIMAL(3, 1),
    strain: {
      type: DataTypes.ENUM, 
      allowNull: false,
      values: ['Indica', 'Hybrid', 'Sativa'],
    },
    reportedEffectsId: {
      type: DataTypes.INTEGER,
      
    },
  }, {});
  Flower.associate = function(models) {
      
    const columnMappingDispensary = {
      through: "Product",
      other: "dispensaryId",
      foreignKey: "flowerId"
    }
    
    const columnMappingReview = {
      through: "Product",
      other: "reviewId",
      foreignKey: "flowerId"
    }
    

    Flower.belongsToMany( models.Review, columnMappingReview )
    Flower.belongsToMany( models.Dispensary, columnMappingDispensary )
    Flower.hasOne( models.ReportedEffect, { foreignKey: "flowerId"})
    
  };
  return Flower;
};