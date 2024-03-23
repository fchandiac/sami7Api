const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class TaxSellingPrices extends Model { }
    TaxSellingPrices.init({
        tax_id: DataTypes.INTEGER,
        selling_price_id: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'TaxSellingPrices',
        underscored: true
    })
    return TaxSellingPrices
}

