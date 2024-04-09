const express = require('express')
const router = express.Router()
const customers = require('../database/controllers/customers')

// create(rut, name, activity, district, city, address, phone, mail)


router.post('/customers/create', async (req, res) => {
    const { rut, name, activity, district, city, address, phone, mail } = req.body
    const customer = await customers.create(rut, name, activity, district, city, address, phone, mail)
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
    const {rut, name, activity, district, city, address, phone, mail } = req.body
    const customer = await customers.update(rut, name, activity, district, city, address, phone, mail)
    res.json(customer)
})

router.post('/customers/destroy', async (req, res) => {
    const { id } = req.body
    const customer = await customers.destroy(id)
    res.json(customer)
})



router.post('/customers/findOneByName', async (req, res) => {
    const { name } = req.body
    const customer = await customers.findOneByName(name)
    res.json(customer)
})

module.exports = router