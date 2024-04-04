const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class SellingPrices extends Model { }
    SellingPrices.init({
        gross: DataTypes.INTEGER,
        net: DataTypes.INTEGER,
        purchase_net : DataTypes.INTEGER,
        utility : DataTypes.INTEGER,
        price_list_id: DataTypes.INTEGER,
        product_id : DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'SellingPrices',
        underscored: true
    })
    return SellingPrices
}


// gross: 
// net:
// purchase_net: 
// utility: 
// price_list_id: 
// product_id: 