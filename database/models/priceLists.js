const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class PriceLists extends Model { }
    PriceLists.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'PriceLists',
        underscored: true
    })
    return PriceLists
}
