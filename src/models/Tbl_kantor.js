import Sequilize, { Model } from "sequelize";

class Tbl_kantor extends Model {
  static init(sequelize) {
    super.init(
      {
        nama_kantor: {
          type: Sequilize.STRING,
          allowNull: false,
        },
        lokasi: {
          type: Sequilize.STRING,
          allowNull: false,
        },
        no_hp1: {
          type: Sequilize.STRING,
        },
        no_hp2: {
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
        name: "kantorId",
        allowNull: false,
      },
      as: "user",
    });
  }
}

export default Tbl_kantor;
