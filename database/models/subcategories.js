const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Subcategories extends Model { }
    Subcategories.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        category_id: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'Subcategories',
        underscored: true
    })
    return Subcategories
}

