"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Tbl_menu",
      [
        {
          nama_menu: "Input Data",
          link: faker.internet.url(),
          icon: faker.internet.url(),
          deskripsi: faker.lorem.lines(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_menu: "Tampil Data",
          link: faker.internet.url(),
          icon: faker.internet.url(),
          deskripsi: faker.lorem.lines(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_menu: "Home",
          link: faker.internet.url(),
          icon: faker.internet.url(),
          deskripsi: faker.lorem.lines(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_menu: "Manual",
          link: faker.internet.url(),
          icon: faker.internet.url(),
          deskripsi: faker.lorem.lines(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_menu: "Novian",
          link: faker.internet.url(),
          icon: faker.internet.url(),
          deskripsi: faker.lorem.lines(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Tbl_menu", null, {});
  },
};
