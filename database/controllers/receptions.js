   // const receptions = {
    //   id: null,
    //   description: "",
    //   type: 0,
    //  status: false,
    //  reception_id: null,
    //   user_id: null,
    //   document_type: null,
    //   document_id: null,
    //   nulled: false,
    // }

    //receptions


    // async function create(name, description) {
    //     const categorie = await Categories.create({
    //         name: name,
    //         description: description
    //     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    //     return categorie
    // }
    

const {Receptions} = require('../db')
const receptions = {}
const { Op } = require("sequelize");



async function create(description, type, status, date, user_id, reception_id, document_type, document_id, nulled) {
    const reception = await Receptions.create({
        description: description,
        type: type,
        status: status,
        date: date,
        user_id: user_id,
        reception_id: reception_id,
        document_type: document_type,
        document_id: document_id,
        nulled: nulled
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function findAll() {
    const reception = await Receptions.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function findAllBetweenDates(start, end) {
    const reception = await Receptions.findAll({
        where: {
            date: {
                [Op.between]: [start, end]
            }
        }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}

async function finAllByPurchase(purchase_id) {
    const reception = await Receptions.findAll({
        where: {
            document_type: 1,
            document_id: purchase_id
        }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return reception
}


receptions.create = create
receptions.findAll = findAll
receptions.findAllBetweenDates = findAllBetweenDates
receptions.finAllByPurchase = finAllByPurchase

module.exports = receptions




