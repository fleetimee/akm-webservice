import Sequelize, { Model } from "sequelize";

class Tbl_referensi extends Model {
  static init(sequelize) {
    super.init(
      {
        referensi_id: {
          type: Sequelize.STRING,
          primaryKey: true,
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
      },
      {
        timestamps: false,
        sequelize,
        freezeTableName: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Tbl_referensi, {
      foreignKey: {
        name: "group_id",
        as: "agama",
      },
    });
  }
}

export default Tbl_referensi;
