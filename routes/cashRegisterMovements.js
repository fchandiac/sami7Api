const express = require('express')
const router = express.Router()
const cashRegisterMovements = require('../database/controllers/cashRegisterMovements')

router.post('/cashRegisterMovements/create', async (req, res) => {
    const { cash, description, type, previous_balance, debit, credit, balance, reference_id, user_id, cash_register_id, payment_method_id } = req.body
    const cashRegisterMovement = await cashRegisterMovements.create(cash, description, type, previous_balance, debit, credit, balance, reference_id, user_id, cash_register_id, payment_method_id)
    res.json(cashRegisterMovement)
})

////ERRRORRRRRR EL MOVIMIENTO VA ASOCIADO A UNO O MAS PAGOS 
/// LAS VENTAS VAN ASOCIADAS A UNO O MAS PAGOS
/// LOS PAGOS VAN ASOCIADOS A UN MOVIMIENTO
// SE DEBE ELIMINAR EL CAMPO paymentMethod_id, DEL MOVIENTO CREAR LA TABLA PAYMENTS 

router.post('/cashRegisterMovements/findAllByCashRegister', async (req, res) => {
    const { cash_register_id } = req.body
    const cashRegisterMovement = await cashRegisterMovements.findAllByCashRegister(cash_register_id)
    res.json(cashRegisterMovement)
})

router.post('/cashRegisterMovements/findLastByCashRegister', async (req, res) => {
    const { cash_register_id } = req.body
    const cashRegisterMovement = await cashRegisterMovements.findLastByCashRegister(cash_register_id)
    res.json(cashRegisterMovement)
})



router.post('/cashRegisterMovements/cashAmount', async (req, res) => {
    const { cash_register_id } = req.body
    const cashRegisterMovement = await cashRegisterMovements.cashAmount(cash_register_id)
    res.json(cashRegisterMovement)
})



router.post('/cashRegisterMovements/noCashAmount', async (req, res) => {
    const { cash_register_id } = req.body
    const cashRegisterMovement = await cashRegisterMovements.noCashAmount(cash_register_id)
    res.json(cashRegisterMovement)
})



router.post('/cashRegisterMovements/findAllByCashRegisterAndPaymentMethod', async (req, res) => {
    const { cash_register_id, payment_method_id } = req.body
    const cashRegisterMovement = await cashRegisterMovements.findAllByCashRegisterAndPaymentMethod(cash_register_id, payment_method_id)
    res.json(cashRegisterMovement)
})



router.post('/cashRegisterMovements/findAllByCashRegisterAndType', async (req, res) => {
    const { cash_register_id, type } = req.body
    const cashRegisterMovement = await cashRegisterMovements.findAllByCashRegisterAndType(cash_register_id, type)
    res.json(cashRegisterMovement)
})

// function voidById(id)

router.post('/cashRegisterMovements/voidById', async (req, res) => {
    const { id } = req.body
    const cashRegisterMovement = await cashRegisterMovements.voidById(id)
    res.json(cashRegisterMovement)
})

module.exports = router