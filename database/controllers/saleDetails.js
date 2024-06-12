const {SaleDetails, Sales, Products} = require('../db')
const saleDetails = {}


const sale_detail = {
    id: null,
    quanty: 0,
    price: 0,
    discount: 0,
    utility: 0,
    net: 0,
    tax: 0,
    total: 0,
    sale_id: null,
    product_id: null,
  };

async function create(quanty, price, discount, utility, net, tax, total, sale_id, product_id) {
    try {
        const saleDetail = await SaleDetails.create({
            quanty: quanty,
            price: price,
            discount: discount,
            utility: utility,
            net: net,
            tax: tax,
            total: total,
            sale_id: sale_id,
            product_id: product_id
        })
        return { 'code': 1, 'data': saleDetail }
    } catch (err) {
        return { 'code': 0, 'data': err }
    }
}

async function findAllBySaleId(sale_id) {
    try {
        const saleDetail = await SaleDetails.findAll({ where: { sale_id: sale_id }, include: [Sales, Products]})
        return { 'code': 1, 'data': saleDetail }
    } catch (err) {
        return { 'code': 0, 'data': err }
    }
}




saleDetails.create = create
saleDetails.findAllBySaleId = findAllBySaleId


module.exports = saleDetails

