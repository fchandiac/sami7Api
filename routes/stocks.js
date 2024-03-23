const express = require('express')
const router = express.Router()
const stocks = require('../database/controllers/stocks')

router.post('/stocks/create', async (req, res) => {
    const { total, available, reserve, critical, storage_id, product_id } = req.body
    const stock = await stocks.create(total, available, reserve, critical, storage_id, product_id)
    res.json(stock)
})

router.get('/stocks/findAll', async (req, res) => {
    const stock = await stocks.findAll()
    res.json(stock)
})

router.post('/stocks/findOneById', async (req, res) => {
    const { id } = req.body
    const stock = await stocks.findOneById(id)
    res.json(stock)
})

router.post('/stocks/findAllByStorage', async (req, res) => {
    const { storage_id } = req.body
    const stock = await stocks.findAllByStorage(storage_id)
    res.json(stock)
})

router.post('/stocks/findOneByStorageAndProduct', async (req, res) => {
    const { storage_id, product_id } = req.body
    const stock = await stocks.findOneByStorageAndProduct(storage_id, product_id)
    res.json(stock)
})


router.post('/stocks/addStock', async (req, res) => {
    const { id, quanty } = req.body
    const stock = await stocks.addStock(id, quanty)
    res.json(stock)
})

router.post('/stocks/decrementStock', async (req, res) => {
    const { id, quanty } = req.body
    const stock = await stocks.decrementStock(id, quanty)
    res.json(stock)
})


router.get('/stocks/findAllGroupByProduct', async (req, res) => {
    const stock = await stocks.findAllGroupByProduct()
    res.json(stock)
})

module.exports = router



