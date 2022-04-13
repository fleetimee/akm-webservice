import Sequelize, { Model } from "sequelize";

class Person extends Model {
  static init(sequelize) {
    super.init(
      {
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        lastName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
      },
      {
        sequelize,
        timestamps: true,
        freezeTableName: true,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Task, {
      foreignKey: {
        name: "personId",
        allowNull: false,
      },
      as: "tasks",
    });
  }
}

export default Person;
