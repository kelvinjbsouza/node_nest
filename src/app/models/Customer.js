// eslint-disable-next-line no-unused-vars
import Sequelize, { Model, Op } from "sequelize";

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      },
      {
        // ESCOPOS:
        scopes: {
          active: {
            where: {
              status: "ACTIVE",
            },
          },
          kelvin: {
            where: {
              name: "Kelvin",
            },
          },
          created(date) {
            return {
              where: {
                createdAt: {
                  [Op.gte]: date,
                },
              },
            };
          },
        },
        hooks: {
          // eslint-disable-next-line no-unused-vars
          beforeValidate: (customer, options) => {
            customer.status = "ARCHIVED";
          },
        },
        sequelize,
        name: {
          singular: "customer",
          plural: "customers",
        },
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Contact);
  }
}

export default Customer;
