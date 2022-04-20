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

    await queryInterface.bulkInsert("Tbl_kantor", [
      {
        nama_kantor: "Kantor Pusat/Cabang Utama",
        lokasi: "Jl. Tentara Pelajar No. 7 Yogyakarta",
        no_hp1: "(0274) 561614 ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_kantor: "Kantor Kas UPN Veteran Yogyakarta",
        lokasi:
          "Kampus Universitas Pembangunan Nasional (UPN)\rVeteran Yogyakarta\rJl. SWK No. 104 (Lingkar Utara),Condongcatur, Sleman\rJl. SWK 104 (Lingkar Utara) Condongcatur, Sleman",
        no_hp1: "(0274) 488530",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_kantor: "Kantor Kas RSKIA Bethesda Lempuyangwangi",
        lokasi:
          "Kompleks RSU Bethesda Lempuyangwangi,\rJl. Hayam Wuruk no.6, Yogyakarta",
        no_hp1: "(0274) 553551",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Tbl_kantor", null, {});
  },
};
