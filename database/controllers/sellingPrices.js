const {SellingPrices, PriceLists, Taxes} = require('../db')
const sellingPrices = {}

// async function create(net, gross, provider_id, taxes) {
//     console.log('TAXES', taxes)

//     try {
//         const purchasePrice = await PurchasePrices.create({
//             net: net,
//             gross: gross,
//             provider_id: provider_id
//         })
    
//         await Promise.all(
//           taxes.map(async (item) => {
//             const tax = await Taxes.findByPk(item.id)
//             tax.addPurchasePrice(purchasePrice)
//           })
//         )

//         return { 'code': 1, 'data': purchasePrice }
//     } catch (err){
//         return { 'code': 0, 'data': err } 
//     }
// }

// async function create(net, gross, price_list_id, purchase_price_id, purchase_net, utility) {
//     const priceList = await SellingPrices.create({
//         net: net,
//         gross: gross,
//         price_list_id: price_list_id,
//         purchase_price_id: purchase_price_id,
//         purchase_net: purchase_net,
//         utility: utility
//     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return priceList
// }

async function create(net, gross, price_list_id, purchase_price_id, purchase_net, utility, taxes) {
    console.log('TAXES', taxes)

    try {
        const newSellingPrice = await SellingPrices.create({
            net: net,
            gross: gross,
            price_list_id: price_list_id,
            purchase_price_id: purchase_price_id,
            purchase_net: purchase_net,
            utility: utility
        })
    
        await Promise.all(
          taxes.map(async (item) => {
            const tax = await Taxes.findByPk(item.id)
            tax.addSellingPrice(newSellingPrice)
          })
        )

        return { 'code': 1, 'data': newSellingPrice }
    } catch (err){
        return { 'code': 0, 'data': err } 
    }

}



async function findAll() {
    const priceList = await SellingPrices.findAll({
        include: PriceLists
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return priceList
}

async function findOneById(id) {
    const priceList = await SellingPrices.findOne({ where: { id: id }, include: PriceLists }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return priceList
}

async function findAllByPriceList(price_list_id) {
    const priceList = await SellingPrices.findAll({ where: { price_list_id: price_list_id }, include: PriceLists }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return priceList
}

async function update(id, net, gross, price_list_id) {
    const priceList = await SellingPrices.update({
        net: net,
        gross: gross,
        price_list_id: price_list_id
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return priceList
}

async function destroy(id) {
    const priceList = await SellingPrices.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return priceList
}

sellingPrices.create = create
sellingPrices.findAll = findAll
sellingPrices.findOneById = findOneById
sellingPrices.findAllByPriceList = findAllByPriceList
sellingPrices.update = update
sellingPrices.destroy = destroy

module.exports = sellingPrices

