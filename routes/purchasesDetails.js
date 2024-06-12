
// async function create(quanty, price, utility, net, tax, total, purchase_id, product_id) {
//     const purchaseDetail = await PurchasesDetails.create({
//         quanty: quanty,
//         price: price,
//         utility: utility,
//         net: net,
//         tax: tax,
//         total: total,
//         purchase_id: purchase_id,
//         product_id: product_id,
//     })
//     .then(data => {
//         return {code: 1, data: data}
//     })
//     .catch(err => {
//         return {code: 0, data: err}
//     })
//     return purchaseDetail
// }

// async function findAll(){
//     const purchasesDetails = await PurchasesDetails.findAll()
//     .then(data => {
//         return {code: 1, data: data}
//     })
//     .catch(err => {
//         return {code: 0, data: err}
//     })
//     return purchasesDetails
// }

const express = require('express')
const router = express.Router()
const purchasesDetails = require('../database/controllers/purchasesDetails')

router.post('/purchasesDetails/create', async (req, res) => {
    const { quanty, price, utility, net, tax, total, purchase_id, product_id } = req.body
    const purchaseDetail = await purchasesDetails.create(quanty, price, utility, net, tax, total, purchase_id, product_id)
    res.json(purchaseDetail)
})

router.get('/purchasesDetails/findAll', async (req, res) => {
    const purchaseDetail = await purchasesDetails.findAll()
    res.json(purchaseDetail)
})

//function findByPurchase(purchase_id)
router.post('/purchasesDetails/findByPurchase', async (req, res) => {
    const { purchase_id } = req.body
    const purchaseDetail = await purchasesDetails.findByPurchase(purchase_id)
    res.json(purchaseDetail)
})


module.exports = router
