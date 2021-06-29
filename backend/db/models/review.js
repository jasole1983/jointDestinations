'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photoURL: {
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    targetType: {
      type: DataTypes.ENUM,
      values: ['Flower', 'LocalEvent', 'Dispensary'],
    },
    flowerId: {
      default: null,
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    // eventId: {
      //   default: null,
      //   type: DataTypes.INTEGER
    // },
    dispensaryId: {
      default: null,
      allowNull: true,
      type: DataTypes.INTEGER
    },
  },
  {});
    Review.associate = function(models) {
    // const columnMappingEvent = {
    //   through: 'JoinReviewEvent',
    //   other: 'eventId',
    //   foreignKey: 'reviewId'
    // }

    const columnMappingFlower = {
      through: 'JoinReviewFlower',
      other: 'flowerId',
      foreignKey: 'reviewId',
    };

    const columnMappingDispensary = {
      through: 'JoinReviewDispensary',
      other: 'dispensaryId',
      foreignKey: 'reviewId',
    };
    // Review.belongsToMany( models.Event , columnMappingEvent),
    Review.belongsToMany( models.Flower, columnMappingFlower )
    Review.belongsToMany( models.Dispensary, columnMappingDispensary )
    Review.belongsTo( models.User, { foreignKey: 'userId' } )
  
  };
  
   return Review;
};