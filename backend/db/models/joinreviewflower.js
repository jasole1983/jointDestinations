'use strict';
module.exports = (sequelize, DataTypes) => {
  const JoinReviewFlower = sequelize.define('JoinReviewFlower', {
    flowerId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER
  }, {});
  JoinReviewFlower.associate = function(models) {
    // associations can be defined here
  };
  return JoinReviewFlower;
};