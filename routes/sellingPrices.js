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
    const { id, net, gross, utility, price_list_id } = req.body
    const priceList = await sellingPrices.update(id, net, gross, utility, price_list_id)
    res.json(priceList)
})

router.post('/sellingPrices/destroy', async (req, res) => {
    const { id } = req.body
    const priceList = await sellingPrices.destroy(id)
    res.json(priceList)
})



router.post('/sellingPrices/findAllByProductAndPriceList', async (req, res) => {
    const { product_id, price_list_id } = req.body
    const priceList = await sellingPrices.findAllByProductAndPriceList(product_id, price_list_id)
    res.json(priceList)
})



router.post('/sellingPrices/findTaxesBySellingPrice', async (req, res) => {
    const { sellingPriceId } = req.body
    const tax = await sellingPrices.findTaxesBySellingPrice(sellingPriceId)
    res.json(tax)
})

//  findAllByPriceListGroupByProduct(price_list_id)

router.post('/sellingPrices/findAllByPriceListGroupByProduct', async (req, res) => {
    const { price_list_id } = req.body
    const priceList = await sellingPrices.findAllByPriceListGroupByProduct(price_list_id)
    res.json(priceList)
})

// findAllByProduct(product_id)
// updatePurchaseNetByProduct(product_id, purchase_net)

router.post('/sellingPrices/findAllByProduct', async (req, res) => {
    const { product_id } = req.body
    const priceList = await sellingPrices.findAllByProduct(product_id)
    res.json(priceList)
})

// updatePurchaseNetByProduct(product_id, purchase_net)

router.post('/sellingPrices/updatePurchaseNetByProduct', async (req, res) => {
    const { product_id, purchase_net } = req.body
    const priceList = await sellingPrices.updatePurchaseNetByProduct(product_id, purchase_net)
    res.json(priceList)
})




module.exports = router