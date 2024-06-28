
  
const express = require('express')
const router = express.Router()
const providerAccountMovements = require('../database/controllers/providerAccountMovements')

router.post('/providerAccountMovements/create', async (req, res) => {
    const { description, type, previous_balance, debit, credit, balance, reference_id, provider_id, user_id } = req.body
    const providerAccountMovement = await providerAccountMovements.create(description, type, previous_balance, debit, credit, balance, reference_id, provider_id, user_id)
    res.json(providerAccountMovement)
})

router.post('/providerAccountMovements/findOneById', async (req, res) => {
    const { id } = req.body
    const providerAccountMovement = await providerAccountMovements.findOneById(id)
    res.json(providerAccountMovement)
})

router.post('/providerAccountMovements/findAllByProvider', async (req, res) => {
    const { provider_id } = req.body
    const providerAccountMovement = await providerAccountMovements.findAllByProvider(provider_id)
    res.json(providerAccountMovement)
})

router.post('/providerAccountMovements/findLastByProvider', async (req, res) => {
    const { provider_id } = req.body
    const providerAccountMovement = await providerAccountMovements.findLastByProvider(provider_id)
    res.json(providerAccountMovement)
})

module.exports = router

