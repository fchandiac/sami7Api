const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Storages extends Model { }
    Storages.init({
        name: DataTypes.STRING(255),
        description: DataTypes.STRING(800),
        sales_room: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Storages',
        underscored: true
    })
    return Storages
}
