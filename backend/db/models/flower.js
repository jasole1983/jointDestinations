'use strict';

// const { default: AddFlowerForm } = require("../../../frontend/src/components/AddFlower");
// const { FlowerModal } = require("../../../frontend/src/context/NewFlowerModal");

module.exports = (sequelize, DataTypes) => {
  const Flower = sequelize.define('Flower', {
    commonName: {type: DataTypes.STRING(75), allowNull: false, unique: true},
    botanicalName: {type: DataTypes.STRING(125), allowNull: false, unique: true},
    imgURL: DataTypes.STRING(255),
    THC: DataTypes.DECIMAL(3, 1),
    strain: {
      type: DataTypes.ENUM, 
      allowNull: false,
      values: ['Indica', 'Hybrid', 'Sativa'],
    },
    reportedEffects: {
      type: DataTypes.ENUM,
      values: ["Aroused", "Creative", "Energetic", "Euphoric", "Focused", "Giggly", "Happy", "Hungry", "Relaxed", "Sleepy", "Talkative", "Tingly", "Uplifted"]
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

    
  };
  return Flower;
};