 // const paymentsProviders = {
    //   id: null,
    //   description: "",
    //   type: null,
    //   amount: 0,
    //   balance: 0,
    //   purchase_id: null,
    //   user_id: null,
    //   pay_date: null,
    //   payment_method_id: null,
    //   provider_id: null,
    //   nulled: false,
    // }

    // paymentsProviders


    const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class PaymentsProviders extends Model { }
    PaymentsProviders.init({
        description: DataTypes.STRING,
        type: DataTypes.STRING,
        amount: DataTypes.FLOAT,
        balance: DataTypes.FLOAT,
        purchase_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        pay_date: DataTypes.DATE,
        payment_method_id: DataTypes.INTEGER,
        provider_id: DataTypes.INTEGER,
        nulled: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'PaymentsProviders',
        underscored: true
    })
    return PaymentsProviders
}


