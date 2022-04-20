import Sequelize, { Model } from "sequelize";

class Tbl_menu extends Model {
  static init(sequelize) {
    super.init(
      {
        nama_menu: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        link: {
          type: Sequelize.STRING,
        },
        icon: {
          type: Sequelize.STRING,
        },
        deskripsi: {
          type: Sequelize.STRING,
        },
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
      },
      {
        sequelize,
        freezeTableName: true,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Tbl_grup, {
      through: "Tbl_kewenangan",
      foreignKey: "menuId",
      as: "grup",
    });
  }
}

export default Tbl_menu;
