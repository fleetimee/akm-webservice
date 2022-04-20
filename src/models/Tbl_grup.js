import Sequilize, { Model } from "sequelize";

class Tbl_grup extends Model {
  static init(sequelize) {
    super.init(
      {
        nama_grup: {
          type: Sequilize.STRING,
          allowNull: false,
        },
        deskripsi: {
          type: Sequilize.STRING,
        },
      },
      {
        sequelize,
        freezeTableName: true,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Tbl_user, {
      foreignKey: {
        name: "grupId",
        allowNull: false,
      },
      as: "user",
    }),
      this.belongsToMany(models.Tbl_menu, {
        through: "Tbl_kewenangan",
        foreignKey: "grupId",
        as: "menu",
      });
  }

  // static associate(models) {
  //   this.belongsToMany(models.Tbl_menu, {
  //     through: "Tbl_kewenangan",
  //     foreignKey: "grupId",
  //     as: "menu",
  //   });
  // }
}

export default Tbl_grup;
