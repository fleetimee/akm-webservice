import Sequelize, { Model } from "sequelize";

class Mst_debitur extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.STRING,
        },
        nama_debitur: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        alamat: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        no_telp: {
          type: Sequelize.STRING,
        },
        no_ktp: {
          type: Sequelize.STRING,
        },
        no_selular: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        freezeTableName: true,
      }
    );
  }

  //   static associate(models) {
  //     this.hasMany(models.Tbl_debitur_kantor, {
  //       foreignKey: {
  //         name: "debiturId",
  //         allowNull: false,
  //       },
  //       as: "kantor",
  //     });
  //   }
}

export default Mst_debitur;
