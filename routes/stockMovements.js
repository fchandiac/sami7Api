const express = require("express");
const router = express.Router();
const stockMovements = require("../database/controllers/stockMovements");

router.post("/stockMovements/create", async (req, res) => {
  const { add, decrement, balance, type, reference, stock_id } = req.body;
  const stockMovement = await stockMovements.create(
    add,
    decrement,
    balance,
    type,
    reference,
    stock_id
  );
  res.json(stockMovement);
});

// findLastByStock(stock_id)

router.post("/stockMovements/findLastByStock", async (req, res) => {
  const { stock_id } = req.body;
  const stockMovement = await stockMovements.findLastByStock(stock_id);
  res.json(stockMovement);
});





router.post("/stockMovements/findAllByStock", async (req, res) => {
  const { stock_id } = req.body;
  const stockMovement = await stockMovements.findAllByStock(stock_id);
  res.json(stockMovement);
})

module.exports = router;
