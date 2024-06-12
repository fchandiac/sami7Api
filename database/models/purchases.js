// const purchases = {
//     id: null,
//     description: "",
//     type: 0,
//     utility: 0,
//     net: 0,
//     tax: 0,
//     total: 0,
//     user_id: null,
//     provider_id: null,
//     document_type: null,
//     document_id: null,
//     nulled: false,
//   }

const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Purchases extends Model { }
    Purchases.init({
        description: DataTypes.STRING,
        type: DataTypes.INTEGER,
        utility: DataTypes.FLOAT,
        net: DataTypes.FLOAT,
        tax: DataTypes.FLOAT,
        total: DataTypes.FLOAT,
        user_id: DataTypes.INTEGER,
        provider_id: DataTypes.INTEGER,
        document_type: DataTypes.INTEGER,
        document_id: DataTypes.INTEGER,
        nulled: DataTypes.BOOLEAN,

    }, {
        sequelize,
        modelName: 'Purchases',
        underscored: true
    })
    return Purchases
}
