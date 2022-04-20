import Sequelize, { Model } from "sequelize";

class Tbl_kewenangan extends Model {
  static init(sequelize) {
    super.init(
      {
        grupId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        menuId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        nama_kewenangan: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        freezeTableName: true,
      }
    );
  }
}

export default Tbl_kewenangan;
