const express = require('express')
const router = express.Router()
const sellingPrices = require('../database/controllers/sellingPrices')

router.post('/sellingPrices/create', async (req, res) => {
    const { gross, net, utility,purchase_net, price_list_id, product_id,  taxes} = req.body
    const priceList = await sellingPrices.create(gross, net, utility,purchase_net, price_list_id, product_id,  taxes)
    res.json(priceList)
})

router.get('/sellingPrices/findAll', async (req, res) => {
    const priceList = await sellingPrices.findAll()
    res.json(priceList)
})

router.post('/sellingPrices/findOneById', async (req, res) => {
    const { id } = req.body
    const priceList = await sellingPrices.findOneById(id)
    res.json(priceList)
})

router.post('/sellingPrices/findAllByPriceList', async (req, res) => {
    const { price_list_id } = req.body
    const priceList = await sellingPrices.findAllByPriceList(price_list_id)
    res.json(priceList)
})

router.post('/sellingPrices/update', async (req, res) => {
    const { id, net, gross, price_list_id } = req.body
    const priceList = await sellingPrices.update(id, net, gross, price_list_id)
    res.json(priceList)
})

router.post('/sellingPrices/destroy', async (req, res) => {
    const { id } = req.body
    const priceList = await sellingPrices.destroy(id)
    res.json(priceList)
})

module.exports = router