"use strict";

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
      "Tbl_grup",
      [
        {
          nama_grup: "Superadmin",
          deskripsi: "This is superadmin group",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_grup: "Admin",
          deskripsi: "This is admin group",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_grup: "User",
          deskripsi: "This is user group",
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
    await queryInterface.bulkDelete("Tbl_grup", null, {});
  },
};
