// async function create(
//     product_id,
//     puchase_net,
//     purchase_gross,
//     purchase_tax,
//     sale_net,
//     sale_gross,
//     sale_tax,
//     utility,
//     sale_price_list_id,
//     sale_id,
//     sale_detail_id,
//     purchase_id,
//     purchase_detail_id,
//     storage_id,
//     reception_id,
//     status
//   ) {
//     const productCard = await ProductCards.create({
//       product_id: product_id,
//       puchase_net: puchase_net,
//       purchase_gross: purchase_gross,
//       purchase_tax: purchase_tax,
//       sale_net: sale_net,
//       sale_gross: sale_gross,
//       sale_tax: sale_tax,
//       utility: utility,
//       sale_price_list_id: sale_price_list_id,
//       sale_id: sale_id,
//       sale_detail_id: sale_detail_id,
//       purchase_id: purchase_id,
//       purchase_detail_id: purchase_detail_id,
//       storage_id: storage_id,
//       reception_id: reception_id,
//       status: status,
//     })
//       .then((data) => {
//         return { code: 1, data: data };
//       })
//       .catch((err) => {
//         return { code: 0, data: err };
//       });
//     return productCard;
//   }
  
//   async function findAllByProduct(product_id) {
//     const productCard = await ProductCards.findAll({
//       where: {
//         product_id: product_id,
//       },
//     })
//       .then((data) => {
//         return { code: 1, data: data };
//       })
//       .catch((err) => {
//         return { code: 0, data: err };
//       });
//     return productCard;
//   }
  
//   async function countAllByProduct(product_id) {
//     const productCard = await ProductCards.count({
//       where: {
//         product_id: product_id,
//       },
//     })
//       .then((data) => {
//         return { code: 1, data: data };
//       })
//       .catch((err) => {
//         return { code: 0, data: err };
//       });
//     return productCard;
//   }
  
//   async function countAllGroupByProductStorageAndStatus(product_id, storage_id, status){
//       const productCard = await ProductCards.count({
//           where: {
//           product_id: product_id,
//           storage_id: storage_id,
//           status: status
//           },
//           group: ['product_id', 'storage_id', 'status']
//       })
//       .then(data => {
//           return {code: 1, data: data}
//       })
//       .catch(err => {
//           return {code: 0, data: err}
//       })
//       return productCard
//   }
  
//   async function findAllGroupByProductStorageAndStatus(product_id, storage_id, status){
//       const productCard = await ProductCards.findAll({
//           where: {
//           product_id: product_id,
//           storage_id: storage_id,
//           status: status
//           },
//           group: ['product_id', 'storage_id', 'status']
//       })
//       .then(data => {
//           return {code: 1, data: data}
//       })
//       .catch(err => {
//           return {code: 0, data: err}
//       })
//       return productCard
//   }
  
//   async function findAllGroupByProductAndStatus(product_id, status){
//       const productCard = await ProductCards.findAll({
//           where: {
//           product_id: product_id,
//           status: status
//           },
//           group: ['product_id', 'status']
//       })
//       .then(data => {
//           return {code: 1, data: data}
//       })
//       .catch(err => {
//           return {code: 0, data: err}
//       })
//       return productCard
//   }
  
//   async function updateStatus(id, status) {
//     const productCard = await ProductCards.update(
//       {
//         status: status,
//       },
//       { where: { id: id } }
//     )
//       .then((data) => {
//         return { code: 1, data: data };
//       })
//       .catch((err) => {
//         return { code: 0, data: err };
//       });
  
//     return productCard;
//   }
  
const express = require('express')
const router = express.Router()
const productCards = require('../database/controllers/productCards')

router.post('/productCards/create', async (req, res) => {
    const { product_id, puchase_net, purchase_gross, purchase_tax, sale_net, sale_gross, sale_tax, utility, sale_price_list_id, sale_id, sale_detail_id, purchase_id, purchase_detail_id, storage_id, reception_id, status } = req.body
    const productCard = await productCards.create(product_id, puchase_net, purchase_gross, purchase_tax, sale_net, sale_gross, sale_tax, utility, sale_price_list_id, sale_id, sale_detail_id, purchase_id, purchase_detail_id, storage_id, reception_id, status)
    res.json(productCard)
})

router.post('/productCards/findAllByProduct', async (req, res) => {
    const { product_id } = req.body
    const productCard = await productCards.findAllByProduct(product_id)
    res.json(productCard)
})

router.post('/productCards/countAllByProduct', async (req, res) => {
    const { product_id } = req.body
    const productCard = await productCards.countAllByProduct(product_id)
    res.json(productCard)
})

router.post('/productCards/countAllGroupByProductStorageAndStatus', async (req, res) => {
    const { product_id, storage_id, status } = req.body
    const productCard = await productCards.countAllGroupByProductStorageAndStatus(product_id, storage_id, status)
    res.json(productCard)
})

router.post('/productCards/findAllGroupByProductStorageAndStatus', async (req, res) => {
    const { product_id, storage_id, status } = req.body
    const productCard = await productCards.findAllGroupByProductStorageAndStatus(product_id, storage_id, status)
    res.json(productCard)
})

router.post('/productCards/findAllGroupByProductAndStatus', async (req, res) => {
    const { product_id, status } = req.body
    const productCard = await productCards.findAllGroupByProductAndStatus(product_id, status)
    res.json(productCard)
})

router.post('/productCards/updateStatus', async (req, res) => {
    const { id, status } = req.body
    const productCard = await productCards.updateStatus(id, status)
    res.json(productCard)
})

//function findAllGroupByProduct()

router.get('/productCards/findAllGroupByProduct', async (req, res) => {
    const productCard = await productCards.findAllGroupByProduct()
    res.json(productCard)
})

//findFirstCardByProductAndStorage(product_id, storage_id)

router.post('/productCards/findFirstCardByProductAndStorage', async (req, res) => {
    const { product_id, storage_id } = req.body
    const productCard = await productCards.findFirstCardByProductAndStorage(product_id, storage_id)
    res.json(productCard)
})


// findAllGroupByProductAvailable()

router.get('/productCards/findAllGroupByProductAvailable', async (req, res) => {
    const productCard = await productCards.findAllGroupByProductAvailable()
    res.json(productCard)
})

module.exports = router

