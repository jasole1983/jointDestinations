'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DispensaryPhotos', [
      {id: 1, dispensaryId: 1, description: "Exterior", photoURL: 'https://www.planet13lasvegas.com/wp-content/uploads/2019/12/1.jpg', createdAt: new Date(), updatedAt: new Date(), },
      {id: 2, dispensaryId: 1, description: "StoreFront", photoURL: 'https://www.reviewjournal.com/wp-content/uploads/2020/04/13591723_web1_PLANET-13-NOV01-18_110118kc_002.jpg', createdAt: new Date(), updatedAt: new Date(), },
      {id: 3, dispensaryId: 1, description: "Interior", photoURL: 'https://www.cnet.com/a/img/resize/2cce17c5d62824962dcdf99c08bdb3bd9e489701/hub/2019/01/11/2c146e21-40ce-4d6c-bec5-e6b5f88d6788/planet-13-pot-marijuana-dispensary-ces-2019-0305.jpg?auto=webp&width=1092', createdAt: new Date(), updatedAt: new Date(), },
      {id: 4, dispensaryId: 1, description: "Interior", photoURL: 'https://media.lasvegasweekly.com/img/photos/2020/08/13/8_Best-Dispensary_Planet-13_credit_Steve-Marcus_Staff_t1000.jpg?c76bf34eada957f64a0b14990027a576ff9bf379', createdAt: new Date(), updatedAt: new Date(), },
      {id: 5, dispensaryId: 3, description: "Exterior", photoURL: 'https://cdn.theculturetrip.com/wp-content/uploads/2018/07/reef-dispensary-vegas.jpg', createdAt: new Date(), updatedAt: new Date(), },
      {id: 6, dispensaryId: 3, description: "StoreFront", photoURL: 'https://reefdispensaries.com/wp-content/uploads/2020/10/Reef-Dispensary-North-Las-Vegas-hero_sq.jpg', createdAt: new Date(), updatedAt: new Date(), },
      {id: 7, dispensaryId: 3, description: "Interior", photoURL: 'https://images.weedmaps.com/pictures/listings/468/293/551/large/8493490_4printReefInteriors-9468.jpg', createdAt: new Date(), updatedAt: new Date(), },
      {id: 8, dispensaryId: 3, description: "Interior", photoURL: 'https://leafly-production.imgix.net/https%3A%2F%2Fleafly-public.s3-us-west-2.amazonaws.com%2Fdispensary%2Flogos%2FCbq5oLdzTuGFw5eNftGi_lobby.jpg?ixlib=js-2.3.2&dpr=1&w=1100&h=750&fit=fillmax&s=b774de324940d6853bc0688432a73da1', createdAt: new Date(), updatedAt: new Date(), },
      {id: 9, dispensaryId: 2, description: "Title", photoURL: 'https://www.theapothecaryshoppe.com/wp-content/uploads/apothecary-logo-box.jpg', createdAt: new Date(), updatedAt: new Date(), },
      {id: 10, dispensaryId: 2, description: "StoreFront", photoURL: 'https://thumbs.dreamstime.com/z/las-vegas-circa-july-apothecary-shoppe-marijuana-dispensary-as-recreational-pot-legal-nevada-vii-96542057.jpg', createdAt: new Date(), updatedAt: new Date(), },
      {id: 11, dispensaryId: 2, description: "Logo", photoURL: 'https://i2.wp.com/cannabisdailyrecord.com/wp-content/uploads/2015/11/The-Apothecary-Shoppe-Logo-Small.jpg?fit=1500%2C1500&ssl=1', createdAt: new Date(), updatedAt: new Date(), },
      {id: 12, dispensaryId: 2, description: "Interior", photoURL: 'https://www.theapothecaryshoppe.com/wp-content/uploads/bar-frame-.jpg', createdAt: new Date(), updatedAt: new Date(), },
      {id: 13, dispensaryId: 4, description: "Title", photoURL: 'https://cultivatelv.com/wp-content/uploads/2018/11/Cultivate-Logo-Web.png', createdAt: new Date(), updatedAt: new Date(), },
      {id: 14, dispensaryId: 4, description: "StoreFront", photoURL: 'https://cultivatelv.com/wp-content/uploads/2021/03/cultivate-mobile-main-cut-small.jpg', createdAt: new Date(), updatedAt: new Date(), },
      {id: 15, dispensaryId: 4, description: "Logo", photoURL: 'https://images.weedmaps.com/dispensaries/000/053/200/avatar/square_fill/1533490397-profile.jpg', createdAt: new Date(), updatedAt: new Date(), },
      {id: 16, dispensaryId: 4, description: "Interior", photoURL: 'https://warely.io/apps/places/images/cultivate-dispensary-5bef4b93df236.jpg', createdAt: new Date(), updatedAt: new Date(), },
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
    return queryInterface.bulkDelete('DispensaryPhotos', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
