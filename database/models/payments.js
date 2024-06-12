// const payments = {
    //   id: null,
    //   description: "",
    //   type: null,
    //   amount: 0,
    //   balance: 0,
    //   sale_id: null,
    //   user_id: null,
    //   pay_date: null,
    //   payment_method_id: null,
    //   customer_id: null,
    //   cash_register_movement_id: null
    // };

    const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Payments extends Model { }
    Payments.init({
        description: DataTypes.STRING,
        type: DataTypes.INTEGER,
        amount: DataTypes.DECIMAL,
        balance: DataTypes.DECIMAL,
        sale_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        pay_date: DataTypes.DATE,
        payment_method_id: DataTypes.INTEGER,
        customer_id: DataTypes.INTEGER,
        cash_register_movement_id: DataTypes.INTEGER,
        nulled: DataTypes.BOOLEAN

    }, {
        sequelize,
        modelName: 'Payments',
        underscored: true
    })
    return Payments
}

