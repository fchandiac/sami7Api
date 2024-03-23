const { PriceLists } = require('../db')
const priceLists = {}

async function create(name, description) {
    const priceList = await PriceLists.create({
        name: name,
        description: description
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return priceList
}

async function findAll() {
    const priceList = await PriceLists.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return priceList
}

async function findOneById(id) {
    const priceList = await PriceLists.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return priceList
}

async function update(id, name, description) {
    const priceList = await PriceLists.update({
        name: name,
        description: description
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return priceList
}

async function destroy(id) {
    const priceList = await PriceLists.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return priceList
}

priceLists.create = create
priceLists.findAll = findAll
priceLists.findOneById = findOneById
priceLists.update = update
priceLists.destroy = destroy

module.exports = priceLists