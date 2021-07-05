'use strict';
module.exports = (sequelize, DataTypes) => {
  const DispensaryPhoto = sequelize.define('DispensaryPhoto', {
    dispensaryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ["StoreFront", "Interior", "Logo", "Title", "Exterior"],
    },
    photoURL: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {});
  DispensaryPhoto.associate = function(models) {

    DispensaryPhoto.belongsTo(models.Dispensary, { foreignKey: 'dispensaryId' })
    // associations can be defined here
  };
  return DispensaryPhoto;
};