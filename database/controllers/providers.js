const {Providers} = require('../db')
const providers = {}


async function create(rut, name, address, phone, mail) {
    const provider = await Providers.create({
        rut: rut,
        name: name,
        address: address,
        phone: phone,
        mail: mail
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return provider
}

async function findAll() {
    const provider = await Providers.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return provider
}

async function findOneById(id) {
    const provider = await Providers.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return provider
}

async function findOneByRut(rut) {
    const provider = await Providers.findOne({ where: { rut: rut } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return provider
}

async function findOneByName(name) {
    const provider = await Providers.findOne({ where: { name: name } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return provider
}

async function update(id, rut, name, address, phone, mail) {
    const provider = await Providers.update({
        rut: rut,
        name: name,
        address: address,
        phone: phone,
        mail: mail
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return provider
}

async function destroy(id) {
    const provider = await Providers.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return provider
}

providers.create = create
providers.findAll = findAll
providers.findOneById = findOneById
providers.findOneByRut = findOneByRut
providers.findOneByName = findOneByName
providers.update = update
providers.destroy = destroy

module.exports = providers
