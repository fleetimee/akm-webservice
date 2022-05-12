import Sequelize, { Model } from "sequelize";

class Tbl_debpersonal extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        no_deb: {
          type: Sequelize.INTEGER,
        },
        nik: {
          type: Sequelize.INTEGER,
        },
        kd_agama: {
          type: Sequelize.INTEGER,
        },
        tempat_lahir: {
          type: Sequelize.STRING,
        },
        tgl_lahir: {
          type: Sequelize.DATE,
        },
        jenis_kelamin: {
          type: Sequelize.STRING,
        },
        kd_status_kawin: {
          type: Sequelize.STRING,
        },
        kd_status_kawin: {
          type: Sequelize.STRING,
        },
        kd_pendidikan: {
          type: Sequelize.STRING,
        },
        ket_pendidikan: {
          type: Sequelize.STRING,
        },
        kd_penduduk: {
          type: Sequelize.STRING,
        },
        kd_pekerjaan: {
          type: Sequelize.STRING,
        },
        ket_pekerjaan: {
          type: Sequelize.STRING,
        },
        jmlh_penghasilan: {
          type: Sequelize.STRING,
        },
        npwp: {
          type: Sequelize.STRING,
        },
        kd_bid_usaha_tmp_bekerja: {
          type: Sequelize.STRING,
        },
        alamat_tempat_bekerja: {
          type: Sequelize.STRING,
        },
        kd_instansi: {
          type: Sequelize.STRING,
        },
        nama_ibu_kandung: {
          type: Sequelize.STRING,
        },
        nik_pasangan: {
          type: Sequelize.STRING,
        },
        nama_pasangan: {
          type: Sequelize.STRING,
        },
        TblReferensiReferensiId: {
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
    this.belongsTo(models.Tbl_referensi);
  }
}

export default Tbl_debpersonal;
