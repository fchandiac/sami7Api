const {CreditNotes, Users, Customers} = require('../db')
const {Op} = require('sequelize')
const creditNotes = {}

// const credit_notes = {
//   id: null,
//   description: "",
//   type: 0,
//   amount: 0,
//   reference_id_id: null,
//   user_id: null,
//   customer_id: null
// }

async function create(description, type, amount, reference_id, user_id, customer_id) {
    try {
        const creditNote = await CreditNotes.create({
            description: description,
            type: type,
            amount: amount,
            reference_id: reference_id,
            user_id: user_id,
            customer_id: customer_id
        })
        return { code: 1, data: creditNote }
    } catch (err) {
        return { code: 0, data: err }
    }
}

async function findAll() {
    try {
        const creditNotes = await CreditNotes.findAll()
        return { code: 1, data: creditNotes }
    } catch (err) {
        return { code: 0, data: err }
    }
}

async function findOneById(id) {
    try {
        const creditNote = await CreditNotes.findOne({ where: { id: id }, include: [Users, Customers]})
        return { code: 1, data: creditNote }
    } catch (err) {
        return { code: 0, data: err }
    }
}

async function findAllByCustomerId(customer_id) {
    try {
        const creditNotes = await CreditNotes.findAll({ where: { customer_id: customer_id }, include: [Users, Customers]})
        return { code: 1, data: creditNotes }
    } catch (err) {
        return { code: 0, data: err }
    }
}

creditNotes.create = create
creditNotes.findAll = findAll
creditNotes.findOneById = findOneById
creditNotes.findAllByCustomerId = findAllByCustomerId

module.exports = creditNotes