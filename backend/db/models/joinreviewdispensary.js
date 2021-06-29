'use strict';
module.exports = (sequelize, DataTypes) => {
  const JoinReviewDispensary = sequelize.define('JoinReviewDispensary', {
    dispensaryId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER
  }, {});
  JoinReviewDispensary.associate = function(models) {
    // associations can be defined here
  };
  return JoinReviewDispensary;
};