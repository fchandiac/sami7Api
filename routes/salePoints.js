const express = require("express");
const router = express.Router();
const salePoints = require("../database/controllers/salePoints");

// commerce_name: { type: Sequelize.STRING(255), allowNull: true },
// commerce_rut: { type: Sequelize.STRING(255), allowNull: true }

router.post("/salepoints/create", async (req, res) => {
  const {
    name,
    description,
    address,
    phone,
    status,
    storage_id,
    commerce_name,
    commerce_rut,
  } = req.body;
  const salePoint = await salePoints.create(
    name,
    description,
    address,
    phone,
    status,
    storage_id,
    commerce_name,
    commerce_rut
  );
  res.json(salePoint);
});

router.get("/salepoints/findAll", async (req, res) => {
  const salePoint = await salePoints.findAll();
  res.json(salePoint);
});

router.get("/salepoints/findAllOpen", async (req, res) => {
  const salePoint = await salePoints.findAllOpen();
  res.json(salePoint);
});

router.post("/salepoints/updateStatus", async (req, res) => {
  const { id, status } = req.body;
  const salePoint = await salePoints.updateStatus(id, status);
  res.json(salePoint);
});

router.get("/salepoints/findAllClosed", async (req, res) => {
  const salePoint = await salePoints.findAllClosed();
  res.json(salePoint);
});

router.post("/salepoints/findOneById", async (req, res) => {
  const { id } = req.body;
  const salePoint = await salePoints.findOneById(id);
  res.json(salePoint);
});

router.post("/salepoints/update", async (req, res) => {
  const {
    id,
    name,
    description,
    address,
    phone,
    status,
    storage_id,
    commerce_name,
    commerce_rut,
  } = req.body;
  const salePoint = await salePoints.update(
    id,
    name,
    description,
    address,
    phone,
    status,
    storage_id,
    commerce_name,
    commerce_rut
  );
  res.json(salePoint);
});

module.exports = router;
