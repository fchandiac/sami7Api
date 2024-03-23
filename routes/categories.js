const express = require('express')
const router = express.Router()
const categories = require('../database/controllers/categories')


router.post('/categories/create', async (req, res) => {
    const { name, description } = req.body
    const category = await categories.create(name, description)
    res.json(category)
})

router.get('/categories/findAll', async (req, res) => {
    const category = await categories.findAll()
    res.json(category)
})

router.post('/categories/findOneById', async (req, res) => {
    const { id } = req.body
    const category = await categories.findOneById(id)
    res.json(category)
})

router.post('/categories/update', async (req, res) => {
    const { id, name, description } = req.body
    const category = await categories.update(id, name, description)
    res.json(category)
})

router.post('/categories/destroy', async (req, res) => {
    const { id } = req.body
    const category = await categories.destroy(id)
    res.json(category)
})

module.exports = router