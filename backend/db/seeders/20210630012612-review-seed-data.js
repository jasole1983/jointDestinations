'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {rating: 4, comments: "Great selection, helpful staff, decent prices, but tough to find.", userId: 1, targetType: 'Dispensary', dispensaryId: 2, createdAt: new Date(), updatedAt: new Date(), id: 1},
      {rating: 5, comments: "Hands down, my favorite place to come purchase Cannabis!  They have the biggest selection, the best deals, the friendliest staff willing to help you with any questions you have.  Highly recommend this place.  It's worth the trip.", userId: 1, targetType: 'Dispensary', dispensaryId: 3, createdAt: new Date(), updatedAt: new Date(), id: 2},
      {rating: 3, comments: "Average flower, nothing special to write home about.", userId: 1, targetType: 'Flower', flowerId: 3, createdAt: new Date(), updatedAt: new Date(), id: 3},
      {rating: 2, comments: "This made me super paranoid. Didn't care for it.", userId: 1, targetType: 'Flower', flowerId: 5, createdAt: new Date(), updatedAt: new Date(), id: 4},
      {rating: 5, comments: "This is the bombdiggity!", userId: 1, targetType: 'Flower', flowerId: 2, createdAt: new Date(), updatedAt: new Date(), id: 5},
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
    return queryInterface.bulkDelete('Reviews', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
