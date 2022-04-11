import Sequelize, { Model } from "sequelize";

class Tbl_menu extends Model {
  static init(sequelize) {
    super.init(
      {
        menu_ID: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.CHAR,
        },
        menu_NAME: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        menu_DISKRIPSI: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "TBL_MENU",
      }
    );

    return this;
  }
}

export default Tbl_menu;
