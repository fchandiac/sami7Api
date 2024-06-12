const { Model } = require('sequelize')

  // const debit_notes = {
    //   id: null,
    //   description: "",
    //   type: 0,
    //   amount: 0,
    //   user_id: null,
    //   customer_id: null,
    //   reference_id_id: null,
    // }

    //debit_notes


module.exports = (sequelize, DataTypes) => {
    class DebitNotes extends Model { }
    DebitNotes.init({
        description: DataTypes.STRING,
        type: DataTypes.INTEGER,
        amount: DataTypes.FLOAT,
        user_id: DataTypes.INTEGER,
        reference_id: DataTypes.INTEGER,
        customer_id: DataTypes.INTEGER,
    
    }, {
        sequelize,
        modelName: 'DebitNotes',
        underscored: true
    })
    return DebitNotes
}

