const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Providers extends Model { }
    Providers.init({
        rut: DataTypes.STRING,
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        mail: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Providers',
        underscored: true
    })
    return Providers
}
