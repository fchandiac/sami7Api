const { StockMovements, Stocks, Products, Storages } = require("../db");
const stockMovements = {};

 // { id: 0, key: 0, name: "compra/recepción" },
    // { id: 1, key: 1, name: "venta" },
    // { id: 2, key: 2, name: "devolución" },
    //{ id: 3, key: 3, name: "ajuste" },
   // { id: 4, key: 4, name: "consumo" },
    // { id: 5, key: 5, name: "recepción" },
    // { id: 6, key: 6, name: "despacho" },

    // add: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    // decrement: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    // balance: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    // type: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    // reference: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    // user_id: {
    //   type: DataTypes.INTEGER,
    // },
    // product_id: {
    //   type: DataTypes.INTEGER,
    // },
    // storage_id: {
    //   type: DataTypes.INTEGER,
    // },

async function create(description, add, decrement, balance, type, reference, user_id, product_id, storage_id ) {
  const stockMovement = await StockMovements.create({
    description: description,
    add: add,
    decrement: decrement,
    balance: balance,
    type: type,
    reference: reference,
    user_id: user_id,
    product_id: product_id,
    storage_id: storage_id,

  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return stockMovement;
}

async function findAllByProductAndStorage(product_id, storage_id) {
  const stockMovement = await StockMovements.findAll({
    where: { product_id: product_id, storage_id: storage_id },
    include: [
      {
        model: Products,
        attributes: ["name"],
        required: true,
      },
      {
        model: Storages,
        attributes: ["name"],
        required: true,
      },
    ],
    order: [["createdAt", "DESC"]],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return stockMovement;
}

async function findLastByProductAndStorage(product_id, storage_id) {
  const stockMovement = await StockMovements.findOne({
    where: { product_id: product_id, storage_id: storage_id },
    include: [
      {
        model: Products,
        attributes: ["name"],
        required: true,
      },
      {
        model: Storages,
        attributes: ["name"],
        required: true,
      },
    ],
    order: [["createdAt", "DESC"]],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return stockMovement;
}



stockMovements.create = create;
stockMovements.findAllByProductAndStorage = findAllByProductAndStorage;
stockMovements.findLastByProductAndStorage = findLastByProductAndStorage;


module.exports = stockMovements;


