const express = require('express')
const router = express.Router()
const providers = require('../database/controllers/providers')

router.post('/providers/create', async (req, res) => {
    const { rut, name, address, phone, mail } = req.body
    const provider = await providers.create(rut, name, address, phone, mail)
    res.json(provider)
})

router.get('/providers/findAll', async (req, res) => {
    const provider = await providers.findAll()
    res.json(provider)
})

router.post('/providers/findOneById', async (req, res) => {
    const { id } = req.body
    const provider = await providers.findOneById(id)
    res.json(provider)
})

router.post('/providers/findOneByRut', async (req, res) => {
    const { rut } = req.body
    const provider = await providers.findOneByRut(rut)
    res.json(provider)
})

router.post('/providers/findOneByName', async (req, res) => {
    const { name } = req.body
    const provider = await providers.findOneByName(name)
    res.json(provider)
})

router.post('/providers/update', async (req, res) => {
    const { id, rut, name, address, phone, mail } = req.body
    const provider = await providers.update(id, rut, name, address, phone, mail)
    res.json(provider)
})

router.post('/providers/destroy', async (req, res) => {
    const { id } = req.body
    const provider = await providers.destroy(id)
    res.json(provider)
})

module.exports = router