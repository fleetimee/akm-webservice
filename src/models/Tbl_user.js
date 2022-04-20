import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class Tbl_user extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER(10),
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
        nama_lengkap: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        freezeTableName: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Tbl_grup, {
      foreignKey: {
        name: "grupId",
        allowNull: false,
      },
      as: "grup",
    }),
      this.belongsTo(models.Tbl_kantor, {
        foreignKey: {
          name: "kantorId",
          allowNull: false,
        },
        as: "kantor",
      });
  }

  // static associate(models) {
  //   this.belongsTo(models.Tbl_kantor, {
  //     foreignKey: {
  //       name: "kantorId",
  //       allowNull: false,
  //     },
  //     as: "kantor",
  //   });
  // }

  checkPassword(password) {}
}

export default Tbl_user;
