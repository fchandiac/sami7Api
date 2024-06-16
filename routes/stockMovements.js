const express = require("express");
const router = express.Router();
const stockMovements = require("../database/controllers/stockMovements");


// async function create(description, add, decrement, balance, type,reference, user_id, product_id, storage_id ) {
//   const stockMovement = await StockMovements.create({
//     description: description,
//     add: add,
//     decrement: decrement,
//     balance: balance,
//     type: type,
//     reference: reference,
//     user_id: user_id,
//     product_id: product_id,
//     storage_id: storage_id,

//   })
//     .then((data) => {
//       return { code: 1, data: data };
//     })
//     .catch((err) => {
//       return { code: 0, data: err };
//     });
//   return stockMovement;
// }

// async function findAllByProductAndStorage(product_id, storage_id) {
//   const stockMovement = await StockMovements.findAll({
//     where: { product_id: product_id, storage_id: storage_id },
//     include: [
//       {
//         model: Products,
//         attributes: ["name"],
//         required: true,
//       },
//       {
//         model: Storages,
//         attributes: ["name"],
//         required: true,
//       },
//     ],
//   })
//     .then((data) => {
//       return { code: 1, data: data };
//     })
//     .catch((err) => {
//       return { code: 0, data: err };
//     });
//   return stockMovement;
// }

// async function findLastByProductAndStorage(product_id, storage_id) {
//   const stockMovement = await StockMovements.findOne({
//     where: { product_id: product_id, storage_id: storage_id },
//     include: [
//       {
//         model: Products,
//         attributes: ["name"],
//         required: true,
//       },
//       {
//         model: Storages,
//         attributes: ["name"],
//         required: true,
//       },
//     ],
//     order: [["createdAt", "DESC"]],
//   })
//     .then((data) => {
//       return { code: 1, data: data };
//     })
//     .catch((err) => {
//       return { code: 0, data: err };
//     });
//   return stockMovement;
// }


router.post('/stockMovements/create', async (req, res) => {
  const { description, add, decrement, balance, type, reference, user_id, product_id, storage_id} = req.body;
  const stockMovement = await stockMovements.create(
    description, add, decrement, balance, type, reference, user_id, product_id, storage_id
  
  );
  res.json(stockMovement);
})

router.post('/stockMovements/findAllByProductAndStorage', async (req, res) => {
  const { product_id, storage_id } = req.body;
  const stockMovement = await stockMovements.findAllByProductAndStorage(product_id, storage_id);
  res.json(stockMovement);
})


router.post('/stockMovements/findLastByProductAndStorage', async (req, res) => {
  const { product_id, storage_id } = req.body;
  const stockMovement = await stockMovements.findLastByProductAndStorage(product_id, storage_id);
  res.json(stockMovement);
})


module.exports = router;
