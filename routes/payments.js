// async function create(
//     description,
//     type,
//     amount,
//     balance,
//     sale_id,
//     user_id,
//     pay_date,
//     payment_method_id,
//     customer_id,
//     cash_register_movement_id
//   ) {
//     const payment = await Payments.create({
//       description: description,
//       type: type,
//       amount: amount,
//       balance: balance,
//       sale_id: sale_id,
//       user_id: user_id,
//       pay_date: pay_date,
//       payment_method_id: payment_method_id,
//       customer_id: customer_id,
//       cash_register_movement_id: cash_register_movement_id,
//     })
//       .then((data) => {
//         return { code: 1, data: data };
//       })
//       .catch((err) => {
//         return { code: 0, data: err };
//       });
//     return payment;
//   }
  
//   async function findAllByCustomerId(customer_id) {
//     const payment = await Payments.findAll({
//       where: { customer_id: customer_id },
//       include: [Users, Customers],
//       order: [["created_at", "DESC"]],
//     })
//       .then((data) => {
//         return { code: 1, data: data };
//       })
//       .catch((err) => {
//         return { code: 0, data: err };
//       });
//     return payment;
//   }

const express = require('express')
const router = express.Router()
const payments = require('../database/controllers/payments')

router.post('/payments/create', async (req, res) => {
    const { description, type, amount, balance, sale_id, user_id, pay_date, payment_method_id, customer_id, cash_register_movement_id } = req.body
    const payment = await payments.create(description, type, amount, balance, sale_id, user_id, pay_date, payment_method_id, customer_id, cash_register_movement_id)
    res.json(payment)
})

router.post('/payments/findAllByCustomerId', async (req, res) => {
    const { customer_id } = req.body
    const payment = await payments.findAllByCustomerId(customer_id)
    res.json(payment)
})

//findLastByCustomerId(customer_id

router.post('/payments/findLastByCustomerId', async (req, res) => {
    const { customer_id } = req.body
    const payment = await payments.findLastByCustomerId(customer_id)
    res.json(payment)
})

// payments.findAllBetweenDates = findAllBetweenDates;
// payments.findAllBetweenDatesZeroBalance = findAllBetweenDatesZeroBalance;
// payments.findAllBetweenDatesPositiveBalance = findAllBetweenDatesPositiveBalance;

router.post('/payments/findAllBetweenDates', async (req, res) => {
    const { start_date, end_date } = req.body
    const payment = await payments.findAllBetweenDates(start_date, end_date)
    res.json(payment)
})

router.post('/payments/findAllBetweenDatesZeroBalance', async (req, res) => {
    const { start_date, end_date } = req.body
    const payment = await payments.findAllBetweenDatesZeroBalance(start_date, end_date)
    res.json(payment)
})

router.post('/payments/findAllBetweenDatesPositiveBalance', async (req, res) => {
    const { start_date, end_date } = req.body
    const payment = await payments.findAllBetweenDatesPositiveBalance(start_date, end_date)
    res.json(payment)
})


router.post('/payments/voidById', async (req, res) => {
    const { id } = req.body
    const payment = await payments.voidById(id)
    res.json(payment)
})



module.exports = router