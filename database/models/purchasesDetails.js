// const purchase_detail = {
    //   id: null,
    //   quanty: 0,
    //   price: 0,
    //   utility: 0,
    //   net: 0,
    //   tax: 0,
    //   total: 0,
    //   purchase_id: null,
    //   product_id: null,
    // }

    //purchase_details

    const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class PurchasesDetails extends Model { }
    PurchasesDetails.init({
        quanty: DataTypes.INTEGER,
        price: DataTypes.FLOAT,
        utility: DataTypes.FLOAT,
        net: DataTypes.FLOAT,
        tax: DataTypes.FLOAT,
        total: DataTypes.FLOAT,
        purchase_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'PurchasesDetails',
        underscored: true
    })
    return PurchasesDetails
}
