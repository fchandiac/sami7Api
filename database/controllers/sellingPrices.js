const {
  SellingPrices,
  PriceLists,
  Taxes,
  Products,
  PurchasePrices,
} = require("../db");
const sellingPrices = {};
const sequelize = require("sequelize");

async function create(
  gross,
  net,
  utility,
  purchase_net,
  price_list_id,
  product_id,
  taxes
) {


  try {
    const newSellingPrice = await SellingPrices.create({
      net: net,
      gross: gross,
      price_list_id: price_list_id,
      product_id: product_id,
      purchase_net: purchase_net,
      utility: utility,
    });

    await Promise.all(
      taxes.map(async (item) => {
        const tax = await Taxes.findByPk(item.id);
        tax.addSellingPrice(newSellingPrice);
      })
    );

    return { code: 1, data: newSellingPrice };
  } catch (err) {
    return { code: 0, data: err };
  }
}

async function findAll() {
    const priceList = await SellingPrices.findAll({
      attributes: [
        "id",
        "net",
        "gross",
        "price_list_id",
        "product_id",
        "purchase_net",
        "utility",
        "createdAt",
        [sequelize.col("product.updated_at"), "updatedAt"], // Corregido aquí
      ],
      include: [
        {
          model: PriceLists,
        },
        {
          model: Products,
        },
        {
          model: Taxes,
        },
      ],
      order: [["updated_at", "DESC"]],
    })
      .then((data) => {
        return { code: 1, data: data };
      })
      .catch((err) => {
        return { code: 0, data: err };
      });
    return priceList;
  }

  async function findAllByProductAndPriceList(product_id, price_list_id) {
    const priceList = await SellingPrices.findAll({
      where: { product_id: product_id, price_list_id: price_list_id },
      include: [
        {
          model: PriceLists,
        },
        {
          model: Products,
        },
        {
          model: Taxes,
        },
      ],
    })
      .then((data) => {
        return { code: 1, data: data };
      })
      .catch((err) => {
        return { code: 0, data: err };
      });
    return priceList;
  }
  

async function findOneById(id) {
  const priceList = await SellingPrices.findOne({
    where: { id: id },
    include: PriceLists,
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return priceList;
}

async function findAllByPriceList(price_list_id) {
  const priceList = await SellingPrices.findAll({
    where: { price_list_id: price_list_id },
    include: PriceLists,
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return priceList;
}

async function findAllByPriceListGroupByProduct(price_list_id) {
  const priceList = await SellingPrices.findAll({
    attributes: [
      "product_id",
      "price_list_id",
    ],
    where: { price_list_id: price_list_id },
    include: [
      {
          model: Products,
          attributes: ['name'],
          required: true
      }
  ],
    group: ["product_id"],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return priceList;

}

async function update(id, net, gross, utility, price_list_id) {
  const priceList = await SellingPrices.update(
    {
      net: net,
      gross: gross,
      price_list_id: price_list_id,
      utility: utility,
    },
    { where: { id: id } }
  )
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return priceList;
}

async function destroy(id) {
  const priceList = await SellingPrices.destroy({ where: { id: id } })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return priceList;
}

async function findTaxesBySellingPrice(sellingPriceId) {
  const tax = await Taxes.findAll({
    include: [
      {
        model: SellingPrices,
        where: { id: sellingPriceId },
      },
    ],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return tax;
}

sellingPrices.create = create;
sellingPrices.findAll = findAll;
sellingPrices.findOneById = findOneById;
sellingPrices.findAllByPriceList = findAllByPriceList;
sellingPrices.update = update;
sellingPrices.destroy = destroy;
sellingPrices.findAllByProductAndPriceList = findAllByProductAndPriceList;
sellingPrices.findTaxesBySellingPrice = findTaxesBySellingPrice;
sellingPrices.findAllByPriceListGroupByProduct = findAllByPriceListGroupByProduct;

module.exports = sellingPrices;
