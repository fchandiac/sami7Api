

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class TaxPurchasePrices extends Model { }
    TaxPurchasePrices.init({

        tax_id: DataTypes.INTEGER,
        purchase_price_id: DataTypes.INTEGER
        
    }, {
        sequelize,
        modelName: 'TaxPurchasePrices',
        underscored: true
    })
    return TaxPurchasePrices
}

