

const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class Records extends Model { }
    Records.init({
        user_id: {type: DataTypes.INTEGER},
        action: {type: DataTypes.STRING},
        table: {type: DataTypes.STRING},
        description: {type: DataTypes.STRING}

            

    }, {
        sequelize,
        modelName: 'Records',
        underscored: true
    })
    return Records
}
