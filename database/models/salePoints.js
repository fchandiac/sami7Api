  // const sale_point = {
    //   id: 0,
    //   name: "",
    //   description: "",
    //   address: "",
    //   phone: "",
    //   storage: { id: 1001, key: 1001, name: "SALA DE VENTAS" },
    //   status: false,
    // };

    const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class SalePoints extends Model { }
    SalePoints.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        storage_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'SalePoints',
        underscored: true
    })
    return SalePoints
}

