import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class Tbl_user extends Model {
  static init(sequelize) {
    super.init(
      {
        USERNAME: Sequelize.STRING(100),
        PASSWORD: Sequelize.STRING(100),
        NAMA_LENGKAP: Sequelize.STRING(200),
        EMAIL: Sequelize.STRING(100),
        HOST: Sequelize.STRING(100),
        CREATED_AT: Sequelize.DATE,
        UPDATED_AT: Sequelize.DATE,
        STATUS: Sequelize.CHAR(1),
        GRUP_ID: Sequelize.CHAR(4),
        KD_KANTOR: Sequelize.CHAR(3),
      },
      {
        sequelize,
        timestamps: true,
        tableName: "TBL_USER",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Tbl_grup, { foreignKey: "GRUP_ID" });
  }
}

export default Tbl_user;
