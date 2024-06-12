const express = require('express')
const router = express.Router()
const paymentMethods = require('../database/controllers/paymentMethods')

router.post('/paymentMethods/create', async (req, res) => {
    const { name, description, credit } = req.body
    const paymentMethod = await paymentMethods.create(name, description, credit)
    res.json(paymentMethod)
})

router.get('/paymentMethods/findAll', async (req, res) => {
    const paymentMethod = await paymentMethods.findAll()
    res.json(paymentMethod)
})

router.post('/paymentMethods/findOneById', async (req, res) => {
    const { id } = req.body
    const paymentMethod = await paymentMethods.findOneById(id)
    res.json(paymentMethod)
})

router.post('/paymentMethods/update', async (req, res) => {
    const { id, name, description, credit } = req.body
    const paymentMethod = await paymentMethods.update(id, name, description, credit)
    res.json(paymentMethod)
})

router.post('/paymentMethods/destroy', async (req, res) => {
    const { id } = req.body
    const paymentMethod = await paymentMethods.destroy(id)
    res.json(paymentMethod)
})

module.exports = router