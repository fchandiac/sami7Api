// description: DataTypes.STRING,
// status: DataTypes.BOOLEAN,
// open: DataTypes.DECIMAL(10, 2),
// balance: DataTypes.DECIMAL(10, 2),
// close: DataTypes.DECIMAL(10, 2),
// open_user_id: DataTypes.INTEGER,
// close_user_id: DataTypes.INTEGER,
// sale_point_id: DataTypes.INTEGER

// async function create(name, description) {
//     const categorie = await Categories.create({
//         name: name,
//         description: description
//     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return categorie
// }


const {CashRegisters, SalePoints} = require('../db')
const cashRegisters = {}

async function create(description, status, open, balance, close, open_user_id, close_user_id, sale_point_id) {
   const cashRegister = await CashRegisters.create({
       description: description,
       status: status,
       open: open,
       balance: balance,
       close: close,
       open_user_id: open_user_id,
       close_user_id: close_user_id,
       sale_point_id: sale_point_id
   }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return cashRegister
}

async function findAll() {
    const cashRegister = await CashRegisters.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return cashRegister
}

async function findOneById(id) {
    const cashRegister = await CashRegisters.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return cashRegister
}

async function updateStatus(id, status) {
    const cashRegister = await CashRegisters.update({
        status: status
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return cashRegister
}

async function findAllOpenBySalePoint(sale_point_id) {
    const cashRegister = await CashRegisters.findAll({ where: { sale_point_id: sale_point_id, status: true } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return cashRegister
}

async function balanceCashRegister(cash_register_id, debit, credit) {
    const cashRegister = await CashRegisters.findOne({ where: { id: cash_register_id } })
    const balance = cashRegister.balance + credit - debit
    const updatedCashRegister = await CashRegisters.update({
        balance: balance
    }, { where: { id: cash_register_id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return updatedCashRegister
}

cashRegisters.create = create
cashRegisters.findAll = findAll
cashRegisters.findOneById = findOneById
cashRegisters.updateStatus = updateStatus
cashRegisters.findAllOpenBySalePoint = findAllOpenBySalePoint
cashRegisters.balanceCashRegister = balanceCashRegister

module.exports = cashRegisters
