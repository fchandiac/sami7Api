const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Base extends Model { }
    Base.init({
        code: DataTypes.STRING,
        name: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Base',
        underscored: true
    })
    return Base
}

