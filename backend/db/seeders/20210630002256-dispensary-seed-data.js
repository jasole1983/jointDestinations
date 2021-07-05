'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dispensaries', [
      {name: "Planet 13", address: "2548 W Desert Inn Rd, Ste 100, Las Vegas, NV 89109", hoursOfOperation: JSON.stringify([24, 24, 24, 24, 24, 24, 24]), website: "https://www.planet13lasvegas.com/", medical: true, createdAt: new Date(), updatedAt: new Date(), id: 1},
      {name: "The Apothecary Shoppe", address: "4240 W Flamingo Rd, Suite 100, Las Vegas, NV 89103", hoursOfOperation: JSON.stringify([8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0]), website: "http://theapothecaryshoppe.com/", medical: true, createdAt: new Date(), updatedAt: new Date(), id:2},
      {name: "Reef", address: "3400 Western Ave, Las Vegas, NV 89109", hoursOfOperation: JSON.stringify([24, 24, 24, 24, 24, 24, 24]), website: "https://reefdispensaries.com/locations/las-vegas/", medical: true, createdAt: new Date(), updatedAt: new Date(), id: 3},
      {name: "Cultivate", address: "3615 Spring Mountain Rd, Las Vegas, NV 89102", hoursOfOperation: JSON.stringify([8.3, 8.3, 8.3, 8.3, 8.3, 8.3, 8.3]), website: "https://cultivatelv.com/", medical: false, createdAt: new Date(), updatedAt: new Date(), id: 4},
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
    return queryInterface.bulkDelete('Dispensaries', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
