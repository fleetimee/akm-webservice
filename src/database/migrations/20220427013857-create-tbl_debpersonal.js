"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Tbl_debpersonal", {
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
        type: Sequelize.STRING,
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
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Tbl_debpersonal");
  },
};
