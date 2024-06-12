   // const receptions = {
    //   id: null,
    //   description: "",
    //   type: 0,
    //  status: false,
    //  reception_id: null,
    //   user_id: null,
    //   document_type: null,
    //   document_id: null,
    //   nulled: false,
    // }

    //receptions

    const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Receptions extends Model { }
    Receptions.init({
        description: DataTypes.STRING,
        type: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN,
        date: DataTypes.DATE,
        user_id: DataTypes.INTEGER,
        reception_id: DataTypes.INTEGER,
        document_type: DataTypes.INTEGER,
        document_id: DataTypes.INTEGER,
        nulled: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Receptions',
        underscored: true
    })
    return Receptions
}

