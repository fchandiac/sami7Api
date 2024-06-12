// const credit_notes = {
//   id: null,
//   description: "",
//   type: 0,
//   amount: 0,
//   reference_id_id: null,
//   user_id: null,
//   customer_id: null
// }

//credit_notes

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CreditNotes extends Model {}
  CreditNotes.init(
    {
      description: DataTypes.STRING,
      type: DataTypes.INTEGER,
      amount: DataTypes.FLOAT,
      user_id: DataTypes.INTEGER,
      reference_id: DataTypes.INTEGER,
      customer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CreditNotes",
      underscored: true,
    }
  );
  return CreditNotes;
};
