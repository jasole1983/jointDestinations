'use strict';
module.exports = (sequelize, DataTypes) => {
  const JoinReviewEvent = sequelize.define('JoinReviewEvent', {
    localEventId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER
  }, {});
  JoinReviewEvent.associate = function(models) {
    // associations can be defined here
  };
  return JoinReviewEvent;
};