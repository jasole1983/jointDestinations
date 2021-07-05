'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flowers', [
      {id: 1, name: "Blue Dream", THC: 17.22, strain: "Indica", createdAt: new Date(), updatedAt: new Date()},
      {id: 2, name: "Cookies and Dream", THC: 20.7, strain: 'Hybrid', createdAt: new Date(), updatedAt: new Date()},
      {id: 3, name: "Gary Payton", THC: 18.16, strain: "Indica", createdAt: new Date(), updatedAt: new Date()},
      {id: 4, name: "Fruit Punch", THC: 12.74, strain: "Sativa", createdAt: new Date(), updatedAt: new Date()},
      {id: 5, name: "Chunkberry", THC: 21.34, strain: "Hybrid", createdAt: new Date(), updatedAt: new Date()},
      {id: 6, name: "Double Rainbow", THC: 21.27, strain: "Hybrid", createdAt: new Date(), updatedAt: new Date()},
      {id: 7, name: "Georgia Pie", THC: 20.7, strain: "Hybrid", createdAt: new Date(), updatedAt: new Date()},

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
    return queryInterface.bulkDelete('Flowers', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
