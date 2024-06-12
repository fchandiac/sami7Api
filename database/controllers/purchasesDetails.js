// const purchase_detail = {
    //   id: null,
    //   quanty: 0,
    //   price: 0,
    //   utility: 0,
    //   net: 0,
    //   tax: 0,
    //   total: 0,
    //   purchase_id: null,
    //   product_id: null,
    // }

    //purchase_details

    const {PurchasesDetails} = require('../db')
    const purchasesDetails = {}

    async function create(quanty, price, utility, net, tax, total, purchase_id, product_id) {
        const purchaseDetail = await PurchasesDetails.create({
            quanty: quanty,
            price: price,
            utility: utility,
            net: net,
            tax: tax,
            total: total,
            purchase_id: purchase_id,
            product_id: product_id,
        })
        .then(data => {
            return {code: 1, data: data}
        })
        .catch(err => {
            return {code: 0, data: err}
        })
        return purchaseDetail
    }

    async function findAll(){
        const purchasesDetails = await PurchasesDetails.findAll()
        .then(data => {
            return {code: 1, data: data}
        })
        .catch(err => {
            return {code: 0, data: err}
        })
        return purchasesDetails
    }

    async function findByPurchase(purchase_id){
        const purchasesDetails = await PurchasesDetails.findAll({
            where: {
                purchase_id: purchase_id
            }
        })
        .then(data => {
            return {code: 1, data: data}
        })
        .catch(err => {
            return {code: 0, data: err}
        })
        return purchasesDetails
    }


    purchasesDetails.create = create
    purchasesDetails.findAll = findAll
    purchasesDetails.findByPurchase = findByPurchase

    module.exports = purchasesDetails