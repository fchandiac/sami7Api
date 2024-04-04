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

module.exports = router