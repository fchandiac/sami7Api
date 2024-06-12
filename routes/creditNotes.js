const express = require('express')
const router = express.Router()
const creditNotes = require('../database/controllers/creditNotes')

// creditNotes.create = create
// creditNotes.findAll = findAll
// creditNotes.findOneById = findOneById
// creditNotes.findAllByCustomerId = findAllByCustomerId

//create(description, type, amount, reference_id, user_id, customer_id) 

router.post('/creditNotes/create', async (req, res) => {
    const { description, type, amount, reference_id, user_id, customer_id } = req.body
    const creditNote = await creditNotes.create(description, type, amount, reference_id, user_id, customer_id)
    res.json(creditNote)
})


router.get('/creditNotes/findAll', async (req, res) => {
    const creditNote = await creditNotes.findAll()
    res.json(creditNote)
})

router.post('/creditNotes/findOneById', async (req, res) => {
    const { id } = req.body
    const creditNote = await creditNotes.findOneById(id)
    res.json(creditNote)
})

router.post('/creditNotes/findAllByCustomer', async (req, res) => {
    const { customer_id } = req.body
    const creditNote = await creditNotes.findAllByCustomerId(customer_id)
    res.json(creditNote)
})

module.exports = router