'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Review', [
      {rating: 4, comment: "Great selection, helpful staff, decent prices, but tough to find.", userId: 1, targetType: 'Dispensary', dispensaryId: 2, createdAt: Date().now, updatedAt: Date().now},
      {rating: 5, comment: "Hands down, my favorite place to come purchase Cannabis!  They have the biggest selection, the best deals, the friendliest staff willing to help you with any questions you have.  Highly recommend this place.  It's worth the trip.", userId: 1, targetType: 'Dispensary', dispensaryId: 3, createdAt: Date().now, updatedAt: Date().now},
      {rating: 3, comment: "Average flower, nothing special to write home about.", userId: 1, targetType: 'Flower', flowerId: 3, createdAt: Date().now, updatedAt: Date().now},
      {rating: 2, comment: "This made me super paranoid. Didn't care for it.", userId: 1, targetType: 'Flower', flowerId: 5, createdAt: Date().now, updatedAt: Date().now},
      {rating: 5, comment: "This is the bombdiggity!", userId: 1, targetType: 'Flower', flowerId: 2, createdAt: Date().now, updatedAt: Date().now},
    ], {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Review', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
