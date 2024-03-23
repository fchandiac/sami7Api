const express = require('express')
const router = express.Router()
const records = require('../database/controllers/records')

router.post('/records/create', async (req, res) => {
    const { user_id, action, table, description } = req.body
    const record = await records.create(user_id, action, table, description)
    res.json(record)
})

router.get('/records/findAll', async (req, res) => {
    const record = await records.findAll()
    res.json(record)
})



module.exports = router