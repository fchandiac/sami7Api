// async function create(description, type, utility, net, tax, total, user_id, provider_id, document_type, document_id, nulled) {
//     const purchase = await Purchases.create({
//         description: description,
//         type: type,
//         utility: utility,
//         net: net,
//         tax: tax,
//         total: total,
//         user_id: user_id,
//         provider_id: provider_id,
//         document_type: document_type,
//         document_id: document_id,
//         nulled: nulled
//     })
//     .then(data => {
//         return {code: 1, data: data}
//     })
//     .catch(err => {
//         return {code: 0, data: err}
//     })
//     return purchase
// }
  
// async function findAll(){
//     const purchases = await Purchases.findAll()
//     .then(data => {
//         return {code: 1, data: data}
//     })
//     .catch(err => {
//         return {code: 0, data: err}
//     })
//     return purchases
// }


const express = require('express')
const router = express.Router()
const purchases = require('../database/controllers/purchases')

router.post('/purchases/create', async (req, res) => {
    const { description, type, utility, net, tax, total, user_id, provider_id, document_type, document_id, nulled } = req.body
    const purchase = await purchases.create(description, type, utility, net, tax, total, user_id, provider_id, document_type, document_id, nulled)
    res.json(purchase)
})

router.get('/purchases/findAll', async (req, res) => {
    const purchase = await purchases.findAll()
    res.json(purchase)
})

//function findById(id)
//function findAllBetweenDates(start, end)
router.post('/purchases/findById/', async (req, res) => {
    const { id } = req.body
    const purchase = await purchases.findById(id)
    res.json(purchase)
})


router.post('/purchases/findAllBetweenDates/', async (req, res) => {
    const { start, end } = req.body
    const purchase = await purchases.findAllBetweenDates(start, end)
    res.json(purchase)
})

//findAllByProvider(provider_id)

router.post('/purchases/findAllByProvider/', async (req, res) => {
    const { provider_id } = req.body
    const purchase = await purchases.findAllByProvider(provider_id)
    res.json(purchase)
})


module.exports = router
