const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class SaleDetails extends Model { }
    SaleDetails.init({
        quanty: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        discount: DataTypes.DECIMAL,
        utility: DataTypes.DECIMAL,
        net: DataTypes.DECIMAL,
        tax: DataTypes.DECIMAL,
        total: DataTypes.DECIMAL,
        sale_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'SaleDetails',
        underscored: true
    })
    return SaleDetails
}


