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
      "Tbl_referensi",
      [
        {
          group_id: "KLM",
          ref: "1",
          ket: "Laki Laki",
        },
        {
          group_id: "KLM",
          ref: "2",
          ket: "Perempuan",
        },
        {
          group_id: "AGM",
          ref: "1",
          ket: "Islam",
        },
        {
          group_id: "AGM",
          ref: "2",
          ket: "Kristen",
        },
        {
          group_id: "AGM",
          ref: "3",
          ket: "Katholik",
        },
        {
          group_id: "AGM",
          ref: "4",
          ket: "Hindu",
        },
        {
          group_id: "AGM",
          ref: "5",
          ket: "Budha",
        },
        {
          group_id: "AGM",
          ref: "6",
          ket: "Konghucu",
        },
        {
          group_id: "PDK",
          ref: "1",
          ket: "SD",
        },
        {
          group_id: "PDK",
          ref: "2",
          ket: "SMP",
        },
        {
          group_id: "PDK",
          ref: "3",
          ket: "SMA",
        },
        {
          group_id: "PDK",
          ref: "4",
          ket: "D1",
        },
        {
          group_id: "PDK",
          ref: "5",
          ket: "D2",
        },
        {
          group_id: "PDK",
          ref: "6",
          ket: "D3",
        },
        {
          group_id: "PDK",
          ref: "7",
          ket: "D4",
        },
        {
          group_id: "PDK",
          ref: "8",
          ket: "S1",
        },
        {
          group_id: "PDK",
          ref: "9",
          ket: "S2",
        },
        {
          group_id: "PDK",
          ref: "10",
          ket: "S3",
        },
        {
          group_id: "PDK",
          ref: "11",
          ket: "Tidak Sekolah",
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
    await queryInterface.bulkDelete("Tbl_referensi", null, {});
  },
};
