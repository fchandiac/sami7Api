const { StockMovements, Stocks, Products, Storages } = require("../db");
const stockMovements = {};

async function create(add, decrement, balance, type,reference, stock_id) {
  const stockMovement = await StockMovements.create({
    add: add,
    decrement: decrement,
    balance: balance,
    type: type,
    reference: reference,
    stock_id: stock_id,
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return stockMovement;
}

async function findAllByStock(stock_id) {
  const stockMovement = await StockMovements.findAll({
    where: { stock_id: stock_id },
    include: [
      { model: Stocks },
    ],
    order: [["created_at", "DESC"]],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return stockMovement;
}

async function findLastByStock(stock_id) {
  const stockMovement = await StockMovements.findOne({
    where: { stock_id: stock_id },
    include: [
      { model: Stocks },
    ],
    order: [["created_at", "DESC"]],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return stockMovement;
}

// async function findAllByStock(stock_id) {
//   const stockMovement = await StockMovements.findAll({

//   })
//     .then((data) => {
//       return { code: 1, data: data };
//     })
//     .catch((err) => {
//       return { code: 0, data: err };
//     });
//   return stockMovement;
// }

stockMovements.create = create;
stockMovements.findLastByStock = findLastByStock;
stockMovements.findAllByStock = findAllByStock;

module.exports = stockMovements;


