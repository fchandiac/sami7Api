const {Subcategories, Categories} = require('../db')
const subcategories = {}


async function create(name, description, category_id) {
    const subcategorie = await Subcategories.create({
        name: name,
        description: description,
        category_id: category_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategorie
}

async function findAll() {
    const subcategorie = await Subcategories.findAll({
        include: [Categories]
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategorie
}

async function findOneById(id) {
    const subcategorie = await Subcategories.findOne({ 
        include: [Categories],
        where: { id: id } 
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategorie
}

async function findAllByCategory(category_id) {
    const subcategorie = await Subcategories.findAll({ 
        include: [Categories],
        where: { category_id: category_id } 
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategorie
}

async function update(id, name, description, category_id) {
    const subcategorie = await Subcategories.update({
        name: name,
        description: description,
        category_id: category_id
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return subcategorie
}

async function destroy(id) {
    const subcategorie = await Subcategories.destroy({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return subcategorie
}

subcategories.create = create
subcategories.findAll = findAll
subcategories.findOneById = findOneById
subcategories.findAllByCategory = findAllByCategory
subcategories.update = update
subcategories.destroy = destroy

module.exports = subcategories