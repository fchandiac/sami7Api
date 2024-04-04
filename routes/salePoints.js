const express = require('express')
const router = express.Router()
const salePoints  = require('../database/controllers/salePoints')

router.post('/salepoints/create', async (req, res) => {
    const { name, description, address, phone, status, storage_id } = req.body
    const salePoint = await salePoints.create(name, description, address, phone, status, storage_id)
    res.json(salePoint)
})

router.get('/salepoints/findAll', async (req, res) => {
   const salePoint = await salePoints.findAll()
    res.json(salePoint)
})


router.get('/salepoints/findAllOpen', async (req, res) => {
    const salePoint = await salePoints.findAllOpen()
    res.json(salePoint)
})

router.post('/salepoints/updateStatus', async (req, res) => {
    const { id, status } = req.body
    const salePoint =  await salePoints.updateStatus(id, status)
    res.json(salePoint)
})

router.get('/salepoints/findAllClosed', async (req, res) => {
    const salePoint = await salePoints.findAllClosed()
    res.json(salePoint)
})


router.post('/salepoints/findOneById', async (req, res) => {
    const { id } = req.body
    const salePoint = await salePoints.findOneById(id)
    res.json(salePoint)
})

module.exports = router