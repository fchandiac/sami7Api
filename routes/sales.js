const express = require('express')
const router = express.Router()
const sales = require('../database/controllers/sales')

router.post('/sales/create', async (req, res) => {
    const { description, type, discount, utility, net, tax, total, user_id, customer_id, document_type, document_id } = req.body
    const sale = await sales.create(description, type, discount, utility, net, tax, total, user_id, customer_id, document_type, document_id)
    res.json(sale)
})

router.get('/sales/findAll', async (req, res) => {
    const sale = await sales.findAll()
    res.json(sale)
})

router.post('/sales/findOneById', async (req, res) => {
    const { id } = req.body
    const sale = await sales.findOneById(id)
    res.json(sale)
})

router.post('/sales/findAllByCustomer', async (req, res) => {
    const { customer_id } = req.body
    const sale = await sales.findAllByCustomer(customer_id)
    res.json(sale)
})

router.post('/sales/findOneByDocument', async (req, res) => {
    const { document_type, document_id } = req.body
    const sale = await sales.findOneByDocument(document_type, document_id)
    res.json(sale)
})

router.post('/sales/findAllByDocumentType', async (req, res) => {
    const { document_type } = req.body
    const sale = await sales.findAllByDocumentType(document_type)
    res.json(sale)
})

router.post('/sales/findAllByDocumentId', async (req, res) => {
    const { document_id } = req.body
    const sale = await sales.findAllByDocumentId(document_id)
    res.json(sale)
})

router.post('/sales/findAllByType', async (req, res) => {
    const { type } = req.body
    const sale = await sales.findAllByType(type)
    res.json(sale)
})


router.post('/sales/findAllBetweenDates', async (req, res) => {
    const { start_date, end_date } = req.body
    const sale = await sales.findAllBetweenDates(start_date, end_date)
    res.json(sale)
})

router.post('/sales/findAllBetweenDatesByCustomer', async (req, res) => {
    const { start_date, end_date, customer_id } = req.body
    const sale = await sales.findAllBetweenDatesByCustomer(start_date, end_date, customer_id)
    res.json(sale)
})

router.post('/sales/findAllBetweenDatesByUser', async (req, res) => {
    const { start_date, end_date, user_id } = req.body
    const sale = await sales.findAllBetweenDatesByUser(start_date, end_date, user_id)
    res.json(sale)
})



router.post('/sales/voidById', async (req, res) => {
    const { id } = req.body
    const sale = await sales.voidById(id)
    res.json(sale)
})


module.exports = router