const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Stocks extends Model {}
  Stocks.init(
    {
      total: DataTypes.INTEGER,
      available: DataTypes.INTEGER,
      reserve: DataTypes.INTEGER,
      critical: DataTypes.INTEGER,
      storage_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Stocks",
      underscored: true,
    }
  );
  return Stocks;
};
