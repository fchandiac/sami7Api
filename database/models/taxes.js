// name: { type: Sequelize.STRING(255), allowNull: false, unique: true },
// description: { type: Sequelize.STRING(800), allowNull: true },
// percentage: { type: Sequelize.DECIMAL(5, 2), allowNull: false },

const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Taxes extends Model { }
    Taxes.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        percentage: DataTypes.DECIMAL(5, 2)
    }, {
        sequelize,
        modelName: 'Taxes',
        underscored: true
    })
    return Taxes
}
