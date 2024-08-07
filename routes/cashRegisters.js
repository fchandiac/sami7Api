const express = require('express')
const router = express.Router()
const cashRegisters = require('../database/controllers/cashRegisters')

router.post('/cashRegisters/create', async (req, res) => {
    const { description, status, open, balance, close, open_user_id, close_user_id, sale_point_id } = req.body
    const cashRegister = await cashRegisters.create(description, status, open, balance, close, open_user_id, close_user_id, sale_point_id)
    res.json(cashRegister)
})

router.get('/cashRegisters/findAll', async (req, res) => {
    const cashRegister = await cashRegisters.findAll()
    res.json(cashRegister)
})

router.post('/cashRegisters/findOneById', async (req, res) => {
    const { id } = req.body
    const cashRegister = await cashRegisters.findOneById(id)
    res.json(cashRegister)
})

router.post('/cashRegisters/updateStatus', async (req, res) => {
    const { id, status } = req.body
    const cashRegister = await cashRegisters.updateStatus(id, status)
    res.json(cashRegister)
})

router.post('/cashRegisters/findAllOpenBySalePoint', async (req, res) => {
    const { sale_point_id } = req.body
    const cashRegister = await cashRegisters.findAllOpenBySalePoint(sale_point_id)
    res.json(cashRegister)
})


router.post('/cashRegisters/balanceCashRegister', async (req, res) => {
    const { cash_register_id, debit, credit, type } = req.body
    const cashRegister = await cashRegisters.balanceCashRegister(cash_register_id, debit, credit, type)
    res.json(cashRegister)
})

//updateClose(id, close, close_user_id)

router.post('/cashRegisters/updateClose', async (req, res) => {
    const { id, close, close_user_id } = req.body
    const cashRegister = await cashRegisters.updateClose(id, close, close_user_id)
    res.json(cashRegister)
})


//findAllByStatusBetweenDates(status, start_date, end_date)

router.post('/cashRegisters/findAllByStatusBetweenDates', async (req, res) => {
    const { status, start_date, end_date } = req.body
    const cashRegister = await cashRegisters.findAllByStatusBetweenDates(status, start_date, end_date)
    res.json(cashRegister)
})

// function findAllByStatus(status)

router.post('/cashRegisters/findAllByStatus', async (req, res) => {
    const { status } = req.body
    const cashRegister = await cashRegisters.findAllByStatus(status)
    res.json(cashRegister)
})


module.exports = router