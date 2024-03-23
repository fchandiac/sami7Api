const {Taxes} = require('../db')
const taxes = {}


async function create(name, description, percentage) {
    const tax = await Taxes.create({
        name: name,
        description: description,
        percentage: percentage
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tax
}

async function findAll() {
    const tax = await Taxes.findAll({}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tax
}

async function findOneById(id) {
    const tax = await Taxes.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tax
}

async function findOneByName(name) {
    const tax = await Taxes.findOne({ where: { name: name } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tax
}

async function update(id, name, description, percentage) {
    const tax = await Taxes.update({
        name: name,
        description: description,
        percentage: percentage
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return tax
}

async function destroy(id) {
    const tax = await Taxes.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return tax
}

taxes.create = create
taxes.findAll = findAll
taxes.findOneById = findOneById
taxes.findOneByName = findOneByName
taxes.update = update
taxes.destroy = destroy

module.exports = taxes




