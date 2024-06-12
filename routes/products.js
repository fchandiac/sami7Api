const express = require("express");
const router = express.Router();
const products = require("../database/controllers/products");

router.post("/products/create", async (req, res) => {
  const {
    name,
    code,
    description,
    stock_control,
    iva_subject,
    favorite,
    purchase_price_id,
    subcategory_id,
  } = req.body;
  const product = await products.create(
    name,
    code,
    description,
    stock_control,
    iva_subject,
    favorite,
    purchase_price_id,
    subcategory_id
  );
  res.json(product);
});

router.get("/products/findAll", async (req, res) => {
  const product = await products.findAll();
  res.json(product);
});

router.post("/products/findOneById", async (req, res) => {
  const { id } = req.body;
  const product = await products.findOneById(id);
  res.json(product);
});

router.post("/products/generalUpdate", async (req, res) => {
  const {
    id,
    name,
    code,
    description,
    stock_control,
    iva_subject,
    favorite,
    subcategory_id,
  } = req.body;
  const product = await products.generalUpdate(
    id,
    name,
    code,
    description,
    stock_control,
    iva_subject,
    favorite,
    subcategory_id
  );
  res.json(product);
});

router.post("/products/existByName", async (req, res) => {
  const { name } = req.body;
  const product = await products.existByName(name);
  res.json(product);
});

router.post("/products/findAllToSalePoint", async (req, res) => {
  const { price_list_id, storage_id } = req.body;
  const product = await products.findAllToSalePoint(price_list_id, storage_id);
  res.json(product);
});

router.post("/products/findOneByIdToCart", async (req, res) => {
  const { id } = req.body;
  const product = await products.findOneByIdToCart(id);
  res.json(product);
});



router.post("/products/findOneByIAndStorageAndPriceList", async (req, res) => {
  const { id, storage_id, price_list_id } = req.body;
  const product = await products.findOneByIAndStorageAndPriceList(
    id,
    storage_id,
    price_list_id
  );
  res.json(product);
})

// function updateStockControlById(id, stock_control)

router.post("/products/updateStockControlById", async (req, res) => {
  const { id, stock_control } = req.body;
  const product = await products.updateStockControlById(id, stock_control);
  res.json(product);
})

module.exports = router;
