const {PurchasePrices, Taxes, TaxPurchasePrices} = require('../db')
const purchasePrices = {}



async function create(net, gross, provider_id, taxes) {
    console.log('TAXES', taxes)

    try {
        const purchasePrice = await PurchasePrices.create({
            net: net,
            gross: gross,
            provider_id: provider_id
        })
    
        await Promise.all(
          taxes.map(async (item) => {
            const tax = await Taxes.findByPk(item.id)
            tax.addPurchasePrice(purchasePrice)
          })
        )

        return { 'code': 1, 'data': purchasePrice }
    } catch (err){
        return { 'code': 0, 'data': err } 
    }
}

async function findAll() {
    const purchasePrice = await PurchasePrices.findAll({
        include: [
            {
                model: Taxes,
            }
        ]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return purchasePrice
}

async function findOneById(id) {
    const purchasePrice = await PurchasePrices.findOne({
        where: { id: id },
        include: {
            model: Taxes,
            as: 'taxes',
            through: {
                model: TaxPurchasePrices,
                as: 'tax_purchase_prices'
            }
        }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return purchasePrice
}

async function update(id, net, gross, provider_id) {
    const purchasePrice = await PurchasePrices.update({
        net: net,
        gross: gross,
        provider_id: provider_id
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return purchasePrice
}

async function destroy(id) {
    const purchasePrice = await PurchasePrices.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return purchasePrice
}

async function createTaxPurchasePrices(tax_id, purchase_price_id) {
    console.log('createTaxPurchasePrices')
    console.log('tax: ', tax_id)
    console.log('purchase_price: ', purchase_price_id)

    const taxPurchasePrices = await TaxPurchasePrices.create({
        tax_id: tax_id,
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return taxPurchasePrices
}

purchasePrices.create = create
purchasePrices.findAll = findAll
purchasePrices.findOneById = findOneById
purchasePrices.update = update
purchasePrices.destroy = destroy
purchasePrices.createTaxPurchasePrices = createTaxPurchasePrices

module.exports = purchasePrices