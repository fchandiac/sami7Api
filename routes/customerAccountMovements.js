// async function create(description, type, previous_balance, debit, credit, balance, reference_id, customer_id, user_id) {
//     const customerAccountMovement = await CustomerAccountMovements.create({
//         description: description,
//         type: type,
//         previous_balance: previous_balance,
//         debit: debit,
//         credit: credit,
//         balance: balance,
//         reference_id: reference_id,
//         customer_id: customer_id,
//         user_id: user_id
//     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return customerAccountMovement
// }

// async function findAllByCustomerId(customer_id) {
//     const customerAccountMovement = await CustomerAccountMovements.findAll({ where: { customer_id: customer_id }, include: [Users, Customers] }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return customerAccountMovement
// }

// async function findLastByCustomerId(customer_id) {
//     const customerAccountMovement = await CustomerAccountMovements.findOne({ where: { customer_id: customer_id }, order: [['id', 'DESC']], include: [Users, Customers] }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return customerAccountMovement
// }

const express = require('express')
const router = express.Router()
const customerAccountMovements = require('../database/controllers/customerAccountMovements')

router.post('/customerAccountMovements/create', async (req, res) => {
    const { description, type, previous_balance, debit, credit, balance, reference_id, customer_id, user_id } = req.body
    const customerAccountMovement = await customerAccountMovements.create(description, type, previous_balance, debit, credit, balance, reference_id, customer_id, user_id)
    res.json(customerAccountMovement)
})

router.post('/customerAccountMovements/findAllByCustomerId', async (req, res) => {
    const { customer_id } = req.body
    const customerAccountMovement = await customerAccountMovements.findAllByCustomerId(customer_id)
    res.json(customerAccountMovement)
})

router.post('/customerAccountMovements/findLastByCustomerId', async (req, res) => {
    const { customer_id } = req.body
    const customerAccountMovement = await customerAccountMovements.findLastByCustomerId(customer_id)
    res.json(customerAccountMovement)
})



router.post('/customerAccountMovements/voidById', async (req, res) => {
    const { id } = req.body
    const customerAccountMovement = await customerAccountMovements.voidById(id)
    res.json(customerAccountMovement)
})

module.exports = router