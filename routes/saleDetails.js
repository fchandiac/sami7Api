const express = require('express')
const router = express.Router()

const saleDetails = require('../database/controllers/saleDetails')

router.post('/saleDetails/create', async (req, res) => {
    const { quanty, price, discount, utility, net, tax, total, sale_id, product_id } = req.body
    const saleDetail = await saleDetails.create(quanty, price, discount, utility, net, tax, total, sale_id, product_id)
    res.json(saleDetail)
})

//findAllBySaleId(sale_id)

router.post('/saleDetails/findAllBySaleId', async (req, res) => {
    const { sale_id } = req.body
    const saleDetail = await saleDetails.findAllBySaleId(sale_id)
    res.json(saleDetail)
})

module.exports = router