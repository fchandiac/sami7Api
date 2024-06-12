// async function create(description, type, status, date, user_id, reception_id, document_type, document_id, nulled) {
//     const reception = await Receptions.create({
//         description: description,
//         type: type,
//         status: status,
//         date: date,
//         user_id: user_id,
//         reception_id: reception_id,
//         document_type: document_type,
//         document_id: document_id,
//         nulled: nulled
//     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return reception
// }

// async function findAll() {
//     const reception = await Receptions.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return reception
// }

// async function findAllBetweenDates(start, end) {
//     const reception = await Receptions.findAll({
//         where: {
//             date: {
//                 [Op.between]: [start, end]
//             }
//         }
//     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return reception
// }

// async function finAllByPurchase(purchase_id) {
//     const reception = await Receptions.findAll({
//         where: {
//             document_type: 1,
//             document_id: purchase_id
//         }
//     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return reception
// }


const express = require('express')
const router = express.Router()

const receptions = require('../database/controllers/receptions')

router.post('/receptions/create', async (req, res) => {
    const { description, type, status, date, user_id, reception_id, document_type, document_id, nulled } = req.body
    const reception = await receptions.create(description, type, status, date, user_id, reception_id, document_type, document_id, nulled)
    res.json(reception)
})

router.get('/receptions/findAll', async (req, res) => {
    const reception = await receptions.findAll()
    res.json(reception)
})

router.post('/receptions/findAllBetweenDates', async (req, res) => {
    const { start, end } = req.body
    const reception = await receptions.findAllBetweenDates(start, end)
    res.json(reception)
})

router.post('/receptions/finAllByPurchase', async (req, res) => {
    const { purchase_id } = req.body
    const reception = await receptions.finAllByPurchase(purchase_id)
    res.json(reception)
})

module.exports = router