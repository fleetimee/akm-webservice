"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TBL_USER", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10),
      },
      USERNAME: {
        type: Sequelize.STRING(100),

        allowNull: false,
      },
      PASSWORD: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      NAMA_LENGKAP: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      EMAIL: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      HOST: {
        type: Sequelize.STRING(100),
      },
      CREATED_AT: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      UPDATED_AT: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      STATUS: {
        type: Sequelize.CHAR(1),
      },
      GRUP_ID: {
        type: Sequelize.CHAR(4),
      },
      KD_KANTOR: {
        type: Sequelize.CHAR(3),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("TBL_USER");
  },
};
