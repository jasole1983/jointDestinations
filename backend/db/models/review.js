'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    rating: DataTypes.INTEGER,
    comments: DataTypes.TEXT,
    photoURL: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    targetType: DataTypes.ENUM
  }, {});
  review.associate = function(models) {
    // associations can be defined here
  };
  return review;
};