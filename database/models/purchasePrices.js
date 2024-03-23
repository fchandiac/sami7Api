const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class PurchasePrices extends Model { }
    PurchasePrices.init({
        net: DataTypes.INTEGER,
        gross: DataTypes.INTEGER,
        provider_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'PurchasePrices',
        underscored: true
    })
    return PurchasePrices
}
