import Sequelize, { Model } from "sequelize";

class Tbl_grup extends Model {
  static init(sequelize) {
    super.init(
      {
        GRUP_ID: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.CHAR,
        },
        GRUP_NAME: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        GRUP_DISKRIPSI: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        timestamps: false,
        tableName: "TBL_GRUP",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Tbl_user, {
      through: "Tbl_user",
      foreignKey: "GRUP_ID",
    });
  }
}

export default Tbl_grup;
