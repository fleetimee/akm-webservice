import Sequelize, { Model } from "sequelize";

class Debitur extends Model {
  static init(sequelize) {
    super.init(
      {
        nama_debitur: Sequelize.STRING,
        alamat_debitur: Sequelize.STRING,
        email: Sequelize.STRING,
        no_hp: Sequelize.STRING(15),
      },
      {
        sequelize,
        timestamps: true,
      }
    );

    return this;
  }
}

export default Debitur;
