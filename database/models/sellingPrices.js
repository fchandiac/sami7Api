const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class SellingPrices extends Model { }
    SellingPrices.init({
        net: DataTypes.INTEGER,
        gross: DataTypes.INTEGER,
        price_list_id: DataTypes.INTEGER,
        purchase_price_id: DataTypes.INTEGER,
        purchase_net : DataTypes.INTEGER,
        utility : DataTypes.INTEGER,
          
    }, {
        sequelize,
        modelName: 'SellingPrices',
        underscored: true
    })
    return SellingPrices
}

