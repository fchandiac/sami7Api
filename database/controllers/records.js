const {Records, Users} = require('../db')
const records = require('../models/records')

async function create(user_id, action, table, description) {
    const record = await Records.create({
        user_id: user_id,
        action: action,
        table: table,
        description: description
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return record
}

async function findAll() {
    const record = await Records.findAll({
        include: [Users],
        order: [['created_at', 'DESC']]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return record
}

records.create = create
records.findAll = findAll

module.exports = records
