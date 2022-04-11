"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TBL_GRUP", {
      GRUP_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.CHAR,
      },
      GRUP_NAME: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      GRUP_DISKRIPSI: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("TBL_GRUP");
  },
};
