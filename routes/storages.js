const express = require('express')
const router = express.Router()
const storages = require('../database/controllers/storages')

router.post('/storages/create', async (req, res) => {
    const { name, description, sales_room } = req.body
    const storage = await storages.create(name, description, sales_room)
    res.json(storage)
})

router.get('/storages/findAll', async (req, res) => {
    const storage = await storages.findAll()
    res.json(storage)
})

router.post('/storages/findOneById', async (req, res) => {
    const { id } = req.body
    const storage = await storages.findOneById(id)
    res.json(storage)
})

router.get('/storages/findAllSalesRoom', async (req, res) => {
    const storage = await storages.findAllSalesRoom()
    res.json(storage)
})

router.post('/storages/update', async (req, res) => {
    const { id, name, description, sales_room } = req.body
    const storage = await storages.update(id, name, description, sales_room)
    res.json(storage)
})

router.post('/storages/destroy', async (req, res) => {
    const { id } = req.body
    const storage = await storages.destroy(id)
    res.json(storage)
})

router.post('/storages/findOneByName', async (req, res) => {
    const { name } = req.body
    const storage = await storages.findOneByName(name)
    res.json(storage)
})

module.exports = router