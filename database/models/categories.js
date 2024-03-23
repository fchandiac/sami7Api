// name: { type: Sequelize.STRING, allowNull: false, unique: true },
// description: { type: Sequelize.STRING, allowNull: true },

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Categories extends Model { }
    Categories.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Categories',
        underscored: true
    })
    return Categories
}

