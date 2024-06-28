const {Stocks, Products, Storages} = require('../db')
const stocks = {}
const sequelize = require('sequelize')

async function create(total, available, reserve, critical, storage_id, product_id) {
    const stock = await Stocks.create({
        total: total,
        available: available,
        reserve: reserve,
        critical: critical,
        storage_id: storage_id,
        product_id: product_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return stock
}

async function findAll() {
    try {
        const stock = await Stocks.findAll({
            attributes: [
                'id',
                'total',
                'available',
                'reserve',
                'critical',
                [sequelize.literal('product_id'), 'productId'],
                [sequelize.literal('storage_id'), 'storageId'],
                [sequelize.literal('Storage.name'), 'storageName']
            ],
            include: [
                { model: Storages }
            ],
        });

        const stockData = await Promise.all(stock.map(async data => {
            const productId = data.get('productId');
            const storageId = data.get('storageId');
            const total = data.get('total');
            const available = data.get('available');
            const reserve = data.get('reserve');
            const critical = data.get('critical');
            const storageName = data.get('storageName');

            const productData = await Products.findOne({ where: { id: productId } });
            const productName = productData ? productData.get('name') : null; // Handle if productData is null

            return {
                'id': data.id,
                'productId': productId,
                'productName': productName,
                'storageId': storageId,
                'storageName': storageName,
                'total': total,
                'available': available,
                'reserve': reserve,
                'critical': critical
            };
        }));

        // console.log(stockData);

        return { 'code': 1, 'data': stockData };
    
    } catch (err) {
        return { 'code': 0, 'data': err };
    }
}


async function findOneById(id) {
    const stock = await Stocks.findOne({ where: { id: id }, include: [
        { model: Products },
        { model: Storages }
    ] }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return stock
}

async function findAllByStorage(storage_id) {
    const stock = await Stocks.findAll({ where: { storage_id: storage_id }, include: [
        { model: Products },
        { model: Storages }
    ] }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return stock
}

// async function findOneByStorageAndProduct(storage_id, product_id) {
//     const stock = await Stocks.findOne({ where: { storage_id: storage_id, product_id: product_id }, include: [
//         { model: Products },
//         { model: Storages }
//     ] }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return stock
// }

async function findOneByStorageAndProduct(storage_id, product_id) {  
    const stock = await Stocks.findOne({ 
        where: { storage_id: storage_id, product_id: product_id }, 

    }).then(data => { 
        return { 'code': 1, 'data': data }; 
    }).catch(err => { 
        return { 'code': 0, 'data': err }; 
    });
    return stock;
}



async function addStock(id, quanty) {
    try {
        // Incrementa el total del stock por la cantidad especificada
        const updatedStock = await Stocks.increment('total', { by: quanty, where: { id: id } });

        // Actualiza la disponibilidad del stock
        await updateAvailable(id);

        // Encuentra y devuelve el nuevo stock después de la actualización
        const newStock = await findOneById(id);

        return { 'code': 1, 'data': newStock };
    } catch (error) {
        // Maneja cualquier error que pueda ocurrir durante el proceso
        return { 'code': 0, 'data': error };
    }
}


async function updateAvailable(id){
    const stock  =  await Stocks.findOne({ where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    const totalStock = stock.data.total
    const reservedStock = stock.data.reserve
    const availableStock = totalStock - reservedStock

    const stockUpdate = await Stocks.update({
        available: availableStock
    }, { where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })

    return stockUpdate
   
}

// async function decrementStock(id, quanty) {
//     const stock = await Stocks.decrement('total', { by: quanty, where: { id: id } }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     await updateAvailable(id)
//     const newStock = await findOneById(id)
//     return newStock
// }

// async function decrementStock(id, quanty) {
//     try {
//         // Decrementa el total del stock por la cantidad especificada
//         const updatedStock = await Stocks.decrement('total', { by: quanty, where: { id: id } });

//         // Actualiza la disponibilidad del stock
//         await updateAvailable(id);

//         // Encuentra y devuelve el nuevo stock después de la actualización
//         const newStock = await findOneById(id);

//         return { 'code': 1, 'data': newStock };
//     } catch (error) {
//         // Maneja cualquier error que pueda ocurrir durante el proceso
//         return { 'code': 0, 'data': error };
//     }
// }


async function findAllGroupByProduct() {
    const stock = await Stocks.findAll({
        attributes: [
            'id',
            [sequelize.literal('product_id'), 'productId'],
            [sequelize.literal('Product.name'), 'productName'],
            [sequelize.literal('storage_id'), 'storageId'],
            [sequelize.literal('Storage.name'), 'storageName'],
            'total',
            'available',
            'reserve',
            'critical'
        ],
        include: [
            { model: Products },
            { model: Storages }
        ],
   
      
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return stock
}


stocks.create = create
stocks.findAll = findAll
stocks.findOneById = findOneById
stocks.findAllByStorage = findAllByStorage
stocks.findOneByStorageAndProduct = findOneByStorageAndProduct
stocks.addStock = addStock
// stocks.decrementStock = decrementStock
stocks.updateAvailable = updateAvailable,
stocks.findAllGroupByProduct = findAllGroupByProduct

module.exports = stocks