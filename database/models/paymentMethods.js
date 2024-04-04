// name: "EFECTIVO",
// description: "Pago en Efectivo",
// credit: false,
// paymentMethods

const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class paymentMethods extends Model { }
    paymentMethods.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        credit: DataTypes.BOOLEAN

    }, {
        sequelize,
        modelName: 'paymentMethods',
        underscored: true
    })
    return paymentMethods
}
