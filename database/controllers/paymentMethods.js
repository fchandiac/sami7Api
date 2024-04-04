const {PaymentMethods} = require('../db')
const paymentMethods = {}

async function create(name, description, credit) {
    const paymentMethod = await PaymentMethods.create({
        name: name,
        description: description,
        credit: credit
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return paymentMethod
}

async function findAll() {
    const paymentMethod = await PaymentMethods.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return paymentMethod
}

async function findOneById(id) {
    const paymentMethod = await PaymentMethods.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return paymentMethod
}

async function update(id, name, description, credit) {
    const paymentMethod = await PaymentMethods.update({
        name: name,
        description: description,
        credit: credit
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return paymentMethod
}

async function destroy(id) {
    const paymentMethod = await PaymentMethods.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return paymentMethod
}

paymentMethods.create = create
paymentMethods.findAll = findAll
paymentMethods.findOneById = findOneById
paymentMethods.update = update
paymentMethods.destroy = destroy


module.exports = paymentMethods