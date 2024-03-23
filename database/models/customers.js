const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Customers extends Model { }
    Customers.init({
        rut: DataTypes.STRING,
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        mail: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Customers',
        underscored: true
    })
    return Customers
}