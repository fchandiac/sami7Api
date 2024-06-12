const {SalePoints, Storages} = require('../db')
const salePoints = {}

  // const sale_point = {
    //   id: 0,
    //   name: "",
    //   description: "",
    //   address: "",
    //   phone: "",
    //   storage: { id: 1001, key: 1001, name: "SALA DE VENTAS" },
    //   status: false,
    // };

async function create(name, description, address, phone, status, storage_id, commerce_name, commerce_rut) {
    const salePoint = await SalePoints.create({
        name: name,
        description: description,
        address: address,
        phone: phone,
        status: status,
        storage_id: storage_id,
        commerce_name: commerce_name,
        commerce_rut: commerce_rut
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return salePoint
}

async function findAll() {
    const salePoint = await SalePoints.findAll({
        include: [{ model: Storages }]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return salePoint
}

async function findOneById(id) {
    const salePoint = await SalePoints.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return salePoint
}

async function findOneByName(name) {
    const salePoint = await SalePoints.findOne({ where: { name: name } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return salePoint
}

async function update(id, name, description, address, phone, status, storage_id, commerce_name, commerce_rut) {
    const salePoint = await SalePoints.update({
        name: name,
        description: description,
        address: address,
        phone: phone,
        status: status,
        storage_id: storage_id,
        commerce_name: commerce_name,
        commerce_rut: commerce_rut
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return salePoint
}

async function destroy(id) {
    const salePoint = await SalePoints.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return salePoint
}

async function findAllOpen(){
    const salePoint = await SalePoints.findAll({where: {status: true}}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return salePoint
}

async function updateStatus(id, status){
    const salePoint = await SalePoints.update({
        status: status
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return salePoint
}

async function findAllClosed(){
    const salePoint = await SalePoints.findAll({where: {status: false}}).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return salePoint
}

salePoints.create = create
salePoints.findAll = findAll
salePoints.findOneById = findOneById
salePoints.update = update
salePoints.destroy = destroy
salePoints.findOneByName = findOneByName
salePoints.findAllOpen = findAllOpen
salePoints.updateStatus = updateStatus
salePoints.findAllClosed = findAllClosed

module.exports = salePoints