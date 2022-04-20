"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("Tbl_kantor", "no_hp1", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    queryInterface.addColumn("Tbl_kantor", "no_hp2", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("Tbl_kantor", "no_hp1", "no_hp2");
  },
};
