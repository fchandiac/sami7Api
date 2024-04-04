const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Products extends Model { }
    Products.init({
        name: DataTypes.STRING(255),
        code: DataTypes.STRING(255),
        description: DataTypes.STRING(800),
        stock_control: DataTypes.BOOLEAN,
        iva_subject: DataTypes.BOOLEAN,
        favorite: DataTypes.BOOLEAN,
        purchase_price_id: DataTypes.INTEGER,
        subcategory_id: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'Products',
        underscored: true
    })
    return Products
}

