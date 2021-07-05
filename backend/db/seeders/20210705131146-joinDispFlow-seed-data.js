'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('JoinDispFlow', [
      {dispensaryId: 1, flowerId: 1, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 1, flowerId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 1, flowerId: 3, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 1, flowerId: 4, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 1, flowerId: 5, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 1, flowerId: 6, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 1, flowerId: 7, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 2, flowerId: 1, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 2, flowerId: 2, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 2, flowerId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 2, flowerId: 4, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 2, flowerId: 5, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 2, flowerId: 6, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 2, flowerId: 7, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 3, flowerId: 1, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 3, flowerId: 2, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 3, flowerId: 3, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 3, flowerId: 4, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 3, flowerId: 5, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 3, flowerId: 6, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 3, flowerId: 7, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 4, flowerId: 1, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 4, flowerId: 2, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 4, flowerId: 3, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 4, flowerId: 4, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 4, flowerId: 5, createdAt: new Date(), updatedAt: new Date()},
      {dispensaryId: 4, flowerId: 6, createdAt: new Date(), updatedAt: new Date()}, {dispensaryId: 4, flowerId: 7, createdAt: new Date(), updatedAt: new Date()},
    ], {});
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
    return queryInterface.bulkDelete('JoinDispFlow', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
