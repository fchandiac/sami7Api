// add: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
// decrement: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
// balance: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
// type: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
// stock_id: {
//   type: Sequelize.INTEGER,
//   onDelete: "SET NULL",
//   references: {
//     model: "stocks",
//     key: "id",
//   },
//   allowNull: false,
// },

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class StockMovements extends Model {}
  StockMovements.init(
    {
      add: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      decrement: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      balance: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      type: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
      reference: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
      stock_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "StockMovements",
      underscored: true,
    }
  );
  return StockMovements;
};
