const {Categories} = require('../db')
const categories = {}


async function create(name, description) {
    const categorie = await Categories.create({
        name: name,
        description: description
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return categorie
}

async function findAll() {
    const categorie = await Categories.findAll().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return categorie
}

async function findOneById(id) {
    const categorie = await Categories.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return categorie
}

async function update(id, name, description) {
    const categorie = await Categories.update({
        name: name,
        description: description
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return categorie
}

async function destroy(id) {
    const categorie = await Categories.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return categorie
}

categories.create = create
categories.findAll = findAll
categories.findOneById = findOneById
categories.update = update
categories.destroy = destroy

module.exports = categories
