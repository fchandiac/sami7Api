const {
  Products,
  Subcategories,
  SellingPrices,
  PurchasePrices,
  Taxes,
  Categories,
} = require("../db");
const products = {};
const sequelize = require("sequelize");

// name: DataTypes.STRING(255),
// code: DataTypes.STRING(255),
// description: DataTypes.STRING(800),
// stock_control: DataTypes.BOOLEAN,
// ivaSubject: DataTypes.BOOLEAN,
// favorite: DataTypes.BOOLEAN,
// purchase_price_id: DataTypes.INTEGER,
// selling_price_id: DataTypes.INTEGER,
// subcategory_id: DataTypes.INTEGER

async function create(
  name,
  code,
  description,
  stock_control,
  iva_subject,
  favorite,
  purchase_price_id,
  selling_price_id,
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
    selling_price_id: selling_price_id,
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
      [sequelize.literal("SellingPrice.id"), "sellingPriceId"],
    ],
    include: [
      {
        model: Subcategories,
        include: [{ model: Categories }],
      },
      { model: SellingPrices },
      { model: PurchasePrices },
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

async function findOneById(id) {
  const product = await Products.findOne({
    where: { id: id },
    include: [
      { model: Subcategories },
      { model: SellingPrices },
      { model: PurchasePrices },
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
  ivaSubject,
  favorite,
  subcategory_id
) {
  const product = await Products.update(
    {
      name: name,
      code: code,
      description: description,
      stock_control: stock_control,
      ivaSubject: ivaSubject,
      favorite: favorite,
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

products.create = create;
products.findAll = findAll;
products.findOneById = findOneById;
products.generalUpdate = generalUpdate;
products.existByName = existByName;

module.exports = products;
