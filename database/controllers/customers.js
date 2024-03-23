const {Customers} = require('../db')
const customers = {}


async function create(rut, name, address, phone, mail) {
    const customer = await Customers.create({
        rut: rut,
        name: name,
        address: address,
        phone: phone,
        mail: mail
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function findAll() {
    const customer = await Customers.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function findOneById(id) {
    const customer = await Customers.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function findByRut(rut) {
    const customer = await Customers.findOne({ where: { rut: rut } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function update(id, rut, name, address, phone, mail) {
    const customer = await Customers.update({
        rut: rut,
        name: name,
        address: address,
        phone: phone,
        mail: mail
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return customer
}

async function destroy(id) {
    const customer = await Customers.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}


customers.create = create
customers.findAll = findAll
customers.findOneById = findOneById
customers.findByRut = findByRut
customers.update = update
customers.destroy = destroy

module.exports = customers
