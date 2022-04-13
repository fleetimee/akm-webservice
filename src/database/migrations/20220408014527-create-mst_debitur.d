"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MST_DEBITUR", {
      NO_DEB: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10),
      },
      NAMA_DEB: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      KD_JNS_DEB: {
        type: Sequelize.CHAR(1),
      },
      EMAIL: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      ALAMAT: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      KD_PROVINSI: {
        type: Sequelize.CHAR(2),
      },
      KD_KABUPATEN: {
        type: Sequelize.CHAR(3),
      },
      KD_KECAMATAN: {
        type: Sequelize.CHAR(3),
      },
      KD_KELURAHAN: {
        type: Sequelize.CHAR(3),
      },
      KD_POS: {
        type: Sequelize.CHAR(5),
      },
      RT: {
        type: Sequelize.CHAR(3),
        allowNull: false,
      },
      RW: {
        type: Sequelize.CHAR(3),
        allowNull: false,
      },
      NO_TELP: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      NO_SELULAR: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("MST_DEBITUR");
  },
};
