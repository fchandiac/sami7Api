const express = require('express')
const router = express.Router()
const purchasePrices = require('../database/controllers/purchasePrices')


router.post('/purchasePrices/create', async (req, res) => {
    const { net, gross, provider_id, taxes } = req.body
    const purchasePrice = await purchasePrices.create(net, gross, provider_id, taxes)
    res.json(purchasePrice)
})

router.get('/purchasePrices/findAll', async (req, res) => {
    const purchasePrice = await purchasePrices.findAll()
    res.json(purchasePrice)
})

router.post('/purchasePrices/findOneById', async (req, res) => {
    const { id } = req.body
    const purchasePrice = await purchasePrices.findOneById(id)
    res.json(purchasePrice)
})

router.post('/purchasePrices/update', async (req, res) => {
    const { id, net, gross, provider_id } = req.body
    const purchasePrice = await purchasePrices.update(id, net, gross, provider_id)
    res.json(purchasePrice)
})

router.post('/purchasePrices/destroy', async (req, res) => {
    const { id } = req.body
    const purchasePrice = await purchasePrices.destroy(id)
    res.json(purchasePrice)
})

//findByPk(id)
router.post('/purchasePrices/findByPk', async (req, res) => {
    const { id } = req.body
    const purchasePrice = await purchasePrices.findByPk(id)
    res.json(purchasePrice)
})

// findOneByProduct(id)
router.post('/purchasePrices/findOneByProduct', async (req, res) => {
    const { id } = req.body
    const purchasePrice = await purchasePrices.findOneByProduct(id)
    res.json(purchasePrice)
})

module.exports = router