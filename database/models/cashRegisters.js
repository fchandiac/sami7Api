const { Model } = require('sequelize')

   // const cash_registers = {
    //   id: 0,
    //   status: false,
    //   open: 0,
    //   balance: 0,
    //   close: 0,
    //   open_user_id: null,
    //   close_user_id: null,
    //   sale_point_id: null,
    // };

module.exports = (sequelize, DataTypes) => {
    class CashRegisters extends Model { }
    CashRegisters.init({
        description: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        open: DataTypes.DECIMAL(10, 2),
        balance: DataTypes.DECIMAL(10, 2),
        close: DataTypes.DECIMAL(10, 2),
        open_user_id: DataTypes.INTEGER,
        close_user_id: DataTypes.INTEGER,
        sale_point_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'CashRegisters',
        underscored: true
    })
    return CashRegisters
}

