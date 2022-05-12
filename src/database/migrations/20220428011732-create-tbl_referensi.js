"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Tbl_referensi", {
      referensi_id: {
        type: Sequelize.STRING,
      },
      group_id: {
        type: Sequelize.STRING,
      },
      ref: {
        type: Sequelize.STRING,
      },
      ket: {
        type: Sequelize.STRING,
      },
      group_id2: {
        type: Sequelize.STRING,
      },
      ref2: {
        type: Sequelize.STRING,
      },
      ket2: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Tbl_referensi");
  },
};
