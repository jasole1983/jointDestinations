'use strict';
module.exports = (sequelize, DataTypes) => {
  const flower = sequelize.define('flower', {
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
  flower.associate = function(models) {
      
  };
  return flower;
};