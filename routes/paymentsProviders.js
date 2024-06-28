// async function create(
//     description,
//     type,
//     amount,
//     balance,
//     purchase_id,
//     user_id,
//     pay_date,
//     payment_method_id,
//     provider_id
//     ) {
//     const paymentProvider = await PaymentsProviders.create({
//         description: description,
//         type: type,
//         amount: amount,
//         balance: balance,
//         purchase_id: purchase_id,
//         user_id: user_id,
//         pay_date: pay_date,
//         payment_method_id: payment_method_id,
//         provider_id: provider_id,
//     })
//         .then((data) => {
//         return { code: 1, data: data };
//         })
//         .catch((err) => {
//         return { code: 0, data: err };
//         });
//     return paymentProvider;
//     }

// async function findAllByProviderId(provider_id) {
//     const paymentProvider = await PaymentsProviders.findAll({
//         where: { provider_id: provider_id },
//         include: [Users, Providers],
//         order: [["created_at", "DESC"]],
//     })
//         .then((data) => {
//         return { code: 1, data: data };
//         })
//         .catch((err) => {
//         return { code: 0, data: err };
//         });
//     return paymentProvider;
//     }


// async function findLastByProviderId(provider_id){
//     const paymentProvider = await PaymentsProviders.findOne({
//         where: { provider_id: provider_id },
//         order: [['id', 'DESC']],
//         include: [Users, Providers, PaymentMethods]
//     })
//     .then(data => {
//         return { code: 1, data: data }
//     })
//     .catch(err => {
//         return { code: 0, data: err }
//     })
//     return paymentProvider
// }

// async function findAllBetweenDates(start, end){
//     const paymentProvider = await PaymentsProviders.findAll({
//         where: { created_at: { [Op.between]: [start, end] } },
//         include: [Users, Providers, PaymentMethods],
//         order: [['created_at', 'DESC']]
//     })
//     .then(data => {
//         return { code: 1, data: data }
//     })
//     .catch(err => {
//         return { code: 0, data: err }
//     })
//     return paymentProvider
// }

// async function findAllBetweenDatesZeroBalance(start, end){
//     const paymentProvider = await PaymentsProviders.findAll({
//         where: { created_at: { [Op.between]: [start, end] }, balance: 0 },
//         include: [Users, Providers, PaymentMethods],
//         order: [['created_at', 'DESC']]
//     })
//     .then(data => {
//         return { code: 1, data: data }
//     })
//     .catch(err => {
//         return { code: 0, data: err }
//     })
//     return paymentProvider
// }

// async function findAllBetweenDatesPositiveBalance(start, end){
//     const paymentProvider = await PaymentsProviders.findAll({
//         where: { created_at: { [Op.between]: [start, end] }, balance: { [Op.gt]: 0 } },
//         include: [Users, Providers, PaymentMethods],
//         order: [['created_at', 'DESC']]
//     })
//     .then(data => {
//         return { code: 1, data: data }
//     })
//     .catch(err => {
//         return { code: 0, data: err }
//     })
//     return paymentProvider
// }

// async function voidById(id) {
//     const paymentProvider = await PaymentsProviders.update(
//         {
//         nulled: true,
//         },
//         {
//         where: { id: id },
//         }
//     )
//         .then((data) => {
//         return { code: 1, data: data };
//         })
//         .catch((err) => {
//         return { code: 0, data: err };
//         });
//     return paymentProvider;
// }


const express = require('express')
const router = express.Router()
const paymentsProviders = require('../database/controllers/paymentsProviders')

router.post('/paymentsProviders/create', async (req, res) => {
    const { description, type, amount, balance, purchase_id, user_id, pay_date, payment_method_id, provider_id } = req.body
    console.log(req.body)
    const paymentProvider = await paymentsProviders.create(description, type, amount, balance, purchase_id, user_id, pay_date, payment_method_id, provider_id)
    res.json(paymentProvider)
})

router.post('/paymentsProviders/findAllByProviderId', async (req, res) => {
    const { provider_id } = req.body
    const paymentProvider = await paymentsProviders.findAllByProviderId(provider_id)
    res.json(paymentProvider)
})

router.post('/paymentsProviders/findLastByProviderId', async (req, res) => {
    const { provider_id } = req.body
    const paymentProvider = await paymentsProviders.findLastByProviderId(provider_id)
    res.json(paymentProvider)
})

router.post('/paymentsProviders/findAllBetweenDates', async (req, res) => {
    const { start, end } = req.body
    const paymentProvider = await paymentsProviders.findAllBetweenDates(start, end)
    res.json(paymentProvider)
})

router.post('/paymentsProviders/findAllBetweenDatesZeroBalance', async (req, res) => {
    const { start, end } = req.body
    const paymentProvider = await paymentsProviders.findAllBetweenDatesZeroBalance(start, end)
    res.json(paymentProvider)
})

router.post('/paymentsProviders/findAllBetweenDatesPositiveBalance', async (req, res) => {
    const { start, end } = req.body
    const paymentProvider = await paymentsProviders.findAllBetweenDatesPositiveBalance(start, end)
    res.json(paymentProvider)
})

router.post('/paymentsProviders/voidById', async (req, res) => {
    const { id } = req.body
    const paymentProvider = await paymentsProviders.voidById(id)
    res.json(paymentProvider)
})

module.exports = router