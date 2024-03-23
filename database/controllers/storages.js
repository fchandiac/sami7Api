const {Storages} = require('../db')
const storages = {}

async function create(name, description, sales_room) {
    const storage = await Storages.create({
        name: name,
        description: description,
        sales_room: sales_room
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return storage
}

async function findAll() {
    const storage = await Storages.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return storage
}

async function findOneById(id) {
    const storage = await Storages.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return storage
}

async function findAllSalesRoom() {
    const storage = await Storages.findAll({ where: { sales_room: true } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return storage
}

async function update(id, name, description, sales_room) {
    const storage = await Storages.update({
        name: name,
        description: description,
        sales_room: sales_room
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return storage
}

async function destroy(id) {
    const storage = await Storages.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return storage
}

storages.create = create
storages.findAll = findAll
storages.findOneById = findOneById
storages.findAllSalesRoom = findAllSalesRoom
storages.update = update
storages.destroy = destroy

module.exports = storages