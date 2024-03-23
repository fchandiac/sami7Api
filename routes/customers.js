const express = require('express')
const router = express.Router()
const customers = require('../database/controllers/customers')


router.post('/customers/create', async (req, res) => {
    const { rut, name, address, phone, mail } = req.body
    const customer = await customers.create(rut, name, address, phone, mail)
    res.json(customer)
})

router.get('/customers/findAll', async (req, res) => {
    const customer = await customers.findAll()
    res.json(customer)
})

router.post('/customers/findOneById', async (req, res) => {
    const { id } = req.body
    const customer = await customers.findOneById(id)
    res.json(customer)
})

router.post('/customers/findByRut', async (req, res) => {
    const { rut } = req.body
    const customer = await customers.findByRut(rut)
    res.json(customer)
})

router.post('/customers/update', async (req, res) => {
    const { id, rut, name, address, phone, mail } = req.body
    const customer = await customers.update(id, rut, name, address, phone, mail)
    res.json(customer)
})

router.post('/customers/destroy', async (req, res) => {
    const { id } = req.body
    const customer = await customers.destroy(id)
    res.json(customer)
})

module.exports = router