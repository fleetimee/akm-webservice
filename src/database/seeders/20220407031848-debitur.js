const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    // var data = [];

    // for (let i = 0; i < 50; i++) {
    //   const seedData = {

    //   };
    // }

    var newData = [];

    for (let i = 0; i < 50; i++) {
      const seedData = {
        nama_debitur: faker.name.findName(),
        alamat_debitur: faker.address.streetAddress(),
        email: faker.internet.email(),
        no_hp: faker.phone.phoneNumber("+62#######"),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      newData.push(seedData);
    }

    await queryInterface.bulkInsert("Debiturs", newData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Debiturs", null, {});
  },
};
