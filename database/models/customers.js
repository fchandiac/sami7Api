const { Model } = require('sequelize')


// id: null,
// rut: "",
// name: "",
// activity: "",
// district: null,
// city: null,
// address: "",
// phone: "",
// mail: "",


module.exports = (sequelize, DataTypes) => {
    class Customers extends Model { }
    Customers.init({
        rut: DataTypes.STRING,
        name: DataTypes.STRING,
        activity: DataTypes.STRING,
        district: DataTypes.STRING,
        city: DataTypes.STRING,
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