"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("Tbl_user", "kantorId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Tbl_kantor",
        key: "id",
        as: "kantorId",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("Tbl_user", "kantorId");
  },
};
