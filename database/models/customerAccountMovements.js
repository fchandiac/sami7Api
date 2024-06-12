const { Model } = require('sequelize')

// const customer_account_movements = {
//     id: null,
//     description: "",
//     type: 0,
//     previous_balance: 0,
//     debit: 0,
//     credit: 0,
//     balance: 0,
//     reference_id: null,
//     customer_id: null,
//     user_id: null,
//   };
  


module.exports = (sequelize, DataTypes) => {
    class CustomerAccountMovements extends Model { }
    CustomerAccountMovements.init({
        description: DataTypes.STRING,
        type: DataTypes.INTEGER,
        previous_balance: DataTypes.DECIMAL,
        debit: DataTypes.DECIMAL,
        credit: DataTypes.DECIMAL,
        balance: DataTypes.DECIMAL,
        reference_id: DataTypes.INTEGER,
        customer_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        nulled: DataTypes.BOOLEAN

    }, {
        sequelize,
        modelName: 'CustomerAccountMovements',
        underscored: true
    })
    return CustomerAccountMovements
}

