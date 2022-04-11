"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TBL_MENU", {
      MENU_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.CHAR(4),
      },
      MENU_NAMA: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      MENU_LINK: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      MENU_DISKRIPSI: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      MENU_STATUS: {
        type: Sequelize.CHAR(1),
        defaultValue: 1,
      },
      PARENT_ID: {
        type: Sequelize.CHAR(4),
      },
      MENU_ICON: {
        type: Sequelize.STRING(40),
      },
      PARENT_STS: {
        type: Sequelize.CHAR(1),
      },
      MENU_KATEGOORI: {
        type: Sequelize.STRING(50),
      },
      NO_URUT: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("TBL_MENU");
  },
};
