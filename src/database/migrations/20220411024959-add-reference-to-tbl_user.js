"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("TBL_USER", "GRUP_ID", {
      type: Sequelize.CHAR(4),
      references: {
        model: "Tbl_grup",
        key: "GRUP_ID",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn("TBL_USER", "GRUP_ID", {
      references: {
        type: Sequelize.STRING,
        model: "Tbl_grup",
        key: "GRUP_ID",
      },
    });
  },
};
