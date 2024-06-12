const {
  Products,
  Subcategories,
  SellingPrices,
  PurchasePrices,
  Taxes,
  Categories,
  Stocks,
  Storages,
  PriceLists
} = require("../db");
const products = {};
const sequelize = require("sequelize");

const productCards = require("./productCards");

// name: DataTypes.STRING(255),
// code: DataTypes.STRING(255),
// description: DataTypes.STRING(800),
// stock_control: DataTypes.BOOLEAN,
// ivaSubject: DataTypes.BOOLEAN,
// favorite: DataTypes.BOOLEAN,
// purchase_price_id: DataTypes.INTEGER,
// subcategory_id: DataTypes.INTEGER

async function create(
  name,
  code,
  description,
  stock_control,
  iva_subject,
  favorite,
  purchase_price_id,
  subcategory_id
) {
  const product = await Products.create({
    name: name,
    code: code,
    description: description,
    stock_control: stock_control,
    iva_subject: iva_subject,
    favorite: favorite,
    purchase_price_id: purchase_price_id,
    subcategory_id: subcategory_id,
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return product;
}

async function findAll() {
  const product = await Products.findAll({
    attributes: [
      "id",
      "name",
      "code",
      "description",
      [sequelize.literal("stock_control"), "stockControl"],
      [sequelize.literal("iva_subject"), "ivaSubject"],
      "favorite",
      [sequelize.literal("subcategory_id"), "subcategoryId"],
      [sequelize.literal("Subcategory.name"), "subcategoryName"],
      [sequelize.literal("Subcategory.category_id"), "categoryId"],
      [sequelize.literal("PurchasePrice.id"), "purchasePriceId"],
    ],
    include: [
      {
        model: Subcategories,
        include: [{ model: Categories }],
      },
      { model: SellingPrices },
      { model: PurchasePrices },
      { model: Stocks, include: [{ model: Storages }] },
    ],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return product;
}


// async function findAllToSalePoint(price_list_id, storage_id) {

//     const products = await Products.findAll({
//       include: [
//         { model: Subcategories },
 
//         { model: PurchasePrices },
//         {
//           model: SellingPrices,
//           where: { price_list_id: price_list_id }, // Filtrar precio de venta por el ID de la lista de precios

//         },
//       ],


//     }).then((data) => {

//       const products = data.map(async (product) => {
//         const availableStock = await productCards.countAllGroupByProductStorageAndStatus(product.id, storage_id, 0);
//         product.availableStock = availableStock;
//         return product;
//       })

      


//       return { code: 1, data: data };
//     }).catch((err) => {
//       return { code: 0, data: err };
//     })

// }

async function findAllToSalePoint(price_list_id, storage_id) {
  try {
      const products = await Products.findAll({
          include: [
              { model: Subcategories },
              { model: PurchasePrices },
              {
                  model: SellingPrices,
                  where: { price_list_id: price_list_id }, // Filtrar precio de venta por el ID de la lista de precios
              },
          ],
      });

      const productsWithStock = await Promise.all(products.map(async (product) => {
          const availableStock = await productCards.countAllGroupByProductStorageAndStatus(product.id, storage_id, 0);
          product.setDataValue('availableStock', availableStock.data[0].count); // Usa setDataValue para agregar el campo virtual
          return product;
      }));

      return { code: 1, data: productsWithStock };
  } catch (err) {
      return { code: 0, data: err.message };
  }
}




async function findOneByIAndStorageAndPriceList(id, storage_id, price_list_id) {
  const product = await Products.findOne({
    include: [
      { model: SellingPrices, where: { price_list_id: price_list_id }, include: [{ model: PriceLists }]},
      { model: PurchasePrices },
      { model: Stocks, where: { storage_id: storage_id } },
    ],
    where: { id: id },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return product;
}

async function findOneByIdToCart(id) {
  const product = await Products.findOne({
    include: [
      { model: Subcategories },
      { model: SellingPrices },
      { model: Stocks, include: [{ model: Storages }] },
    ],
    where: { id: id },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return product;

}

async function findOneById(id) {
  const product = await Products.findOne({
    where: { id: id },
    include: [
      { model: Subcategories },
      { model: SellingPrices },
      { model: PurchasePrices, include: [{ model: Taxes }]},
      { model: Stocks, include: [{ model: Storages }] },
    ],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return product;
}

async function generalUpdate(
  id,
  name,
  code,
  description,
  stock_control,
  iva_subject,
  favorite,
  subcategory_id
) {
  const product = await Products.update(
    {
      name: name,
      code: code,
      description: description,
      stock_control: stock_control,
      iva_subject: iva_subject,
      favorite: false,
      subcategory_id: subcategory_id,
    },
    { where: { id: id } }
  )
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return product;
}

async function existByName(name) {
  const product = await Products.findOne({ where: { name: name } });

  if (product !== null) {
    return { code: 1, data: product };
  } else {
    return { code: 1, data: false };
  }
}
async function updateStockControlById(id, stock_control) {
  const product = await Products.update(
    {
      stock_control: stock_control,
    },
    { where: { id: id } }
  )
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return product;
}  

products.create = create;
products.findAll = findAll;
products.findOneById = findOneById;
products.generalUpdate = generalUpdate;
products.existByName = existByName;
products.findAllToSalePoint = findAllToSalePoint;
products.findOneByIdToCart = findOneByIdToCart;
products.findOneByIAndStorageAndPriceList = findOneByIAndStorageAndPriceList;
products.updateStockControlById = updateStockControlById;

module.exports = products;
