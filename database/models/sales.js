// const sale = {
    //   id: null,
    //   description: "",
    //   type: 0,
    //   discount: 0,
    //   utility: 0,
    //   net: 0,
    //   tax: 0,
    //   total: 0,
    //   balance: 0,
    //   pay_date: new Date(),
    //   user_id: null,
    //   customer_id: null,
    //   document_type: null,
    //   document_id: null,
    // };


    const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Sales extends Model { }
    Sales.init({
        description: DataTypes.STRING,
        type: DataTypes.INTEGER,
        discount: DataTypes.DECIMAL,
        utility: DataTypes.DECIMAL,
        net: DataTypes.DECIMAL,
        tax: DataTypes.DECIMAL,
        total: DataTypes.DECIMAL,
        user_id: DataTypes.INTEGER,
        customer_id: DataTypes.INTEGER,
        document_type: DataTypes.INTEGER,
        document_id: DataTypes.INTEGER,
        nulled: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Sales',
        underscored: true
    })
    return Sales
}

