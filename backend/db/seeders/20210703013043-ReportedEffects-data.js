'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ReportedEffects', [
      {id: 1, Relaxed: true, Sleepy: true, createdAt: new Date(), updatedAt: new Date(), flowerId: 1},
      {id: 2, Creative: true, Relaxed: true, createdAt: new Date(), updatedAt: new Date()},
      {id: 3, Tingly: true, createdAt: new Date(), updatedAt: new Date()},
      {id: 4, Happy: true, Energetic: true, createdAt: new Date(), updatedAt: new Date()},
      {id: 5, Relaxed: true, Sleepy: true, Happy: true, createdAt: new Date(), updatedAt: new Date()},
      {id: 6, Aroused: true, Hungry: true, Talkative: true, createdAt: new Date(), updatedAt: new Date()},
      {id: 7, Relaxed: true, Creative: true, Happy: true, createdAt: new Date(), updatedAt: new Date()},
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
    return queryInterface.bulkDelete('ReportedEffects', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
