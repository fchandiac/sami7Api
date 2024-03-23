const express = require('express')
const router = express.Router()
const taxes = require('../database/controllers/taxes')


router.post('/taxes/create', async (req, res) => {
    const { name, description, percentage } = req.body
    const tax = await taxes.create(name, description, percentage)
    res.json(tax)
})

router.get('/taxes/findAll', async (req, res) => {
    const tax = await taxes.findAll()
    res.json(tax)
})

router.post('/taxes/findOneById', async (req, res) => {
    const { id } = req.body
    const tax = await taxes.findOneById(id)
    res.json(tax)
})

router.post('/taxes/findOneByName', async (req, res) => {
    const { name } = req.body
    const tax = await taxes.findOneByName(name)
    res.json(tax)
})

router.post('/taxes/update', async (req, res) => {
    const { id, name, description, percentage } = req.body
    const tax = await taxes.update(id, name, description, percentage)
    res.json(tax)
})

router.post('/taxes/destroy', async (req, res) => {
    const { id } = req.body
    const tax = await taxes.destroy(id)
    res.json(tax)
})

module.exports = router