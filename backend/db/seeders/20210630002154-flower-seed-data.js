'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flower', [
      {id: 1, name: "Blue Dream", THC: 17.22, strain: "Indica", reportedEffects:["Relaxed", "Sleepy"], createdAt: Date().now, updatedAt: Date().now},
      {id: 2, name: "Cookies and Dream", THC: 20.7, strain: 'Hybrid', reportedEffects: ["Creative", "Relaxed"], createdAt: Date().now, updatedAt: Date().now},
      {id: 3, name: "Gary Payton", THC: 18.16, strain: "Indica", reportedEffects: ["Tingly"], createdAt: Date().now, updatedAt: Date().now},
      {id: 4, name: "Fruit Punch", THC: 12.74, strain: "Sativa", reportedEffects: ["Happy", "Energetic"], createdAt: Date().now, updatedAt: Date().now},
      {id: 5, name: "Chunkberry", THC: 21.34, strain: "Hybrid", reportedEffects: ["Relaxed", "Sleepy", "Happy"], createdAt: Date().now, updatedAt: Date().now},
      {id: 6, name: "Double Rainbow", THC: 21.27, strain: "Hybrid", reportedEffects: ["Aroused", "Hungry", "Talkative"], createdAt: Date().now, updatedAt: Date().now},
      {id: 7, name: "Georgia Pie", THC: 20.7, strain: "Hybrid", reportedEffects: ["Relaxed", "Creative", "Happy"], createdAt: Date().now, updatedAt: Date().now},

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
    return queryInterface.bulkDelete('Flower', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
