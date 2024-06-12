  // const productCard = {
    //   id: null,
    //   product_id: null,
    //   puchase_net: 0,
    //   purchase_gross: 0,
    //   purchase_tax: 0,
    //   sale_net: 0,
    //   sale_gross: 0,
    //   sale_tax: 0,
    //   utility: 0,
    //   sale_price_list_id: null,
    //   sale_id: null,
    //   sale_detail_id: null,
    //   purchase_id: null,
    //   purchase_detail_id: null,
    //   storage_id: null,
    //   reception_id: null,
    //   status: 0,
    // }

    //product_cards

    const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class ProductCards extends Model { }
    ProductCards.init({
        product_id: DataTypes.INTEGER,
        puchase_net: DataTypes.FLOAT,
        purchase_gross: DataTypes.FLOAT,
        purchase_tax: DataTypes.FLOAT,
        sale_net: DataTypes.FLOAT,
        sale_gross: DataTypes.FLOAT,
        sale_tax: DataTypes.FLOAT,
        utility: DataTypes.FLOAT,
        sale_price_list_id: DataTypes.INTEGER,
        sale_id: DataTypes.INTEGER,
        sale_detail_id: DataTypes.INTEGER,
        purchase_id: DataTypes.INTEGER,
        purchase_detail_id: DataTypes.INTEGER,
        storage_id: DataTypes.INTEGER,
        reception_id: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'ProductCards',
        underscored: true
    })
    return ProductCards
}

