// const customer_account_movements = {
//   id: null,
//   description: "",
//   type: 0,
//   previous_balance: 0,
//   debit: 0,
//   credit: 0,
//   balance: 0,
//   reference_id: null,
//   provider_id: null,
//   user_id: null,
// };

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ProviderAccountMovements extends Model {}
  ProviderAccountMovements.init(
    {
      description: DataTypes.STRING,
      type: DataTypes.INTEGER,
      previous_balance: DataTypes.DECIMAL,
      debit: DataTypes.DECIMAL,
      credit: DataTypes.DECIMAL,
      balance: DataTypes.DECIMAL,
      reference_id: DataTypes.INTEGER,
      provider_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProviderAccountMovements",
      underscored: true,
    }
  );
  return ProviderAccountMovements;
};
