"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("Tbl_user", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER(10),
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      host: {
        type: Sequelize.STRING,
        defaultValue: "localhost",
      },
      status: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      grupId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tbl_grup",
          key: "id",
          as: "grupId",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Tbl_user");
  },
};
