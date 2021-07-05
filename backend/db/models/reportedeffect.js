'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReportedEffect = sequelize.define('ReportedEffect', {
    Aroused: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }, Creative: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }, Energetic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }, Euphoric: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }, Focused: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }, Giggly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }, Happy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
   }, Hungry: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }, Relaxed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }, Sleepy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }, Talkative: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }, Tingly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }, Uplifted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }, flowerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
     }} );
  ReportedEffect.associate = function(models) {
    ReportedEffect.belongsTo( models.Flower, { foreignKey: 'flowerId'})
  };
  return ReportedEffect;
};