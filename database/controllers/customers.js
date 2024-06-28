const {Customers} = require('../db')
const customers = {}

// id: null,
// rut: "",
// name: "",
// activity: "",
// district: null,
// city: null,
// address: "",
// phone: "",
// mail: "",
async function create(rut, name, activity, district, city, address, phone, mail) {
    const customer = await Customers.create({
        rut: rut,
        name: name,
        activity: activity,
        district: district,
        city: city,
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

async function findOneByName(name) {
    const customer = await Customers.findOne({ where: { name: name } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return customer
}

async function update(id, name, address, phone, mail, activity, district, city) {
    const customer = await Customers.update({
        name: name,
        address: address,
        phone: phone,
        mail: mail,
        activity: activity,
        district: district,
        city: city
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
customers.findOneByName = findOneByName

module.exports = customers
