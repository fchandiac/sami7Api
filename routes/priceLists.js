const express = require('express')
const router = express.Router()
const priceLists = require('../database/controllers/priceLists')

router.post('/priceLists/create', async (req, res) => {
    const { name, description } = req.body
    const priceList = await priceLists.create(name, description)
    res.json(priceList)
})

router.get('/priceLists/findAll', async (req, res) => {
    const priceList = await priceLists.findAll()
    res.json(priceList)
})

router.post('/priceLists/findOneById', async (req, res) => {
    const { id } = req.body
    const priceList = await priceLists.findOneById(id)
    res.json(priceList)
})

router.post('/priceLists/update', async (req, res) => {
    const { id, name, description } = req.body
    const priceList = await priceLists.update(id, name, description)
    res.json(priceList)
})

router.post('/priceLists/destroy', async (req, res) => {
    const { id } = req.body
    const priceList = await priceLists.destroy(id)
    res.json(priceList)
})

module.exports = router