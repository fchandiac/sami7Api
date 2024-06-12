// description: { type: Sequelize.STRING(500), allowNull: false, unique: true },
//       type: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
//       previous_balance: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
//       debit: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
//       credit: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
//       balance: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
//       reference_id: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
//       user_id: {
//         allowNull: true,
//         unique: false,
//         type: Sequelize.INTEGER,
//         onDelete: "SET NULL",
//         references: {
//           model: "users",
//           key: "id",
//         },
//       },
//       paymentMethod_id: {
//         allowNull: true,
//         unique: false,
//         type: Sequelize.INTEGER,
//         onDelete: "SET NULL",
//         references: {
//           model: "payment_methods",
//           key: "id",
//         },
//       },
//       cash_register_id: {
//         allowNull: true,
//         unique: false,
//         type: Sequelize.INTEGER,
//         onDelete: "SET NULL",
//         references: {
//           model: "cash_registers",
//           key: "id",
//         },
//       },


const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class CashRegisterMovements extends Model { }
    CashRegisterMovements.init({
        //cash: { type: Sequelize.BOOLEAN, allowNull:true, defaultValue: false},
        cash: DataTypes.BOOLEAN,
        description: DataTypes.STRING,
        type: DataTypes.INTEGER,
        previous_balance: DataTypes.DECIMAL(10, 2),
        debit: DataTypes.DECIMAL(10, 2),
        credit: DataTypes.DECIMAL(10, 2),
        balance: DataTypes.DECIMAL(10, 2),
        reference_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        cash_register_id: DataTypes.INTEGER,
        payment_method_id: DataTypes.INTEGER,
        nulled: DataTypes.BOOLEAN

    }, {
        sequelize,
        modelName: 'CashRegisterMovements',
        underscored: true
    })
    return CashRegisterMovements
}
