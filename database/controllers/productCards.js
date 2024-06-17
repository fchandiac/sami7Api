// const productCard = {
//   id: null,
//   product_id: null,
//   puchase_net: 0,
//   purchase_gross: 0,
//   purchase_tax: 0,
//   sale_net: 0,
//   sale_gross: 0,
//   sale_tax: 0,
//   utility: 0,
//   sale_price_list_id: null,
//   sale_id: null,
//   sale_detail_id: null,
//   purchase_id: null,
//   purchase_detail_id: null,
//   storage_id: null,
//   reception_id: null,
//   status: 0,
// }

//product_cards

// async function create(name, description) {
//     const categorie = await Categories.create({
//         name: name,
//         description: description
//     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return categorie
// }

const { ProductCards, Products } = require("../db");
const productCards = {};
const sequelize = require("sequelize");

const { Op } = require("sequelize");


const statusList = {
  0: "available",
  1: "reserved",
  2: "sold",
  3: "returned",
  4: "to receive",
  
};

async function create(
  product_id,
  puchase_net,
  purchase_gross,
  purchase_tax,
  sale_net,
  sale_gross,
  sale_tax,
  utility,
  sale_price_list_id,
  sale_id,
  sale_detail_id,
  purchase_id,
  purchase_detail_id,
  storage_id,
  reception_id,
  status
) {
  const productCard = await ProductCards.create({
    product_id: product_id,
    puchase_net: puchase_net,
    purchase_gross: purchase_gross,
    purchase_tax: purchase_tax,
    sale_net: sale_net,
    sale_gross: sale_gross,
    sale_tax: sale_tax,
    utility: utility,
    sale_price_list_id: sale_price_list_id,
    sale_id: sale_id,
    sale_detail_id: sale_detail_id,
    purchase_id: purchase_id,
    purchase_detail_id: purchase_detail_id,
    storage_id: storage_id,
    reception_id: reception_id,
    status: status,
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return productCard;
}

async function findAllByProduct(product_id) {
  const productCard = await ProductCards.findAll({
    where: {
      product_id: product_id,
    },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return productCard;
}

async function countAllByProduct(product_id) {
  const productCard = await ProductCards.count({
    where: {
      product_id: product_id,
    },
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return productCard;
}

async function countAllGroupByProductStorageAndStatus(product_id, storage_id, status){
    const productCard = await ProductCards.count({
        where: {
        product_id: product_id,
        storage_id: storage_id,
        status: status
        },
        group: ['product_id', 'storage_id', 'status']
    })
    .then(data => {
        return {code: 1, data: data}
    })
    .catch(err => {
        return {code: 0, data: err}
    })
    return productCard
}

async function findAllGroupByProductStorageAndStatus(product_id, storage_id, status){
    const productCard = await ProductCards.findAll({
        where: {
        product_id: product_id,
        storage_id: storage_id,
        status: status
        },
        group: ['product_id', 'storage_id', 'status']
    })
    .then(data => {
        return {code: 1, data: data}
    })
    .catch(err => {
        return {code: 0, data: err}
    })
    return productCard
}

async function findAllGroupByProductAndStatus(product_id, status){
    const productCard = await ProductCards.findAll({
        where: {
        product_id: product_id,
        status: status
        },
        group: ['product_id', 'status']
    })
    .then(data => {
        return {code: 1, data: data}
    })
    .catch(err => {
        return {code: 0, data: err}
    })
    return productCard
}

async function updateStatus(id, status) {
  const productCard = await ProductCards.update(
    {
      status: status,
    },
    { where: { id: id } }
  )
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });

  return productCard;
}


async function findAllGroupByProduct() {
    try {
        const productCards = await ProductCards.findAll({
            attributes: [
                'product_id',
                [sequelize.fn('COUNT', sequelize.col('product_id')), 'total'], //Product name 
            ],
            include: [
                {
                    model: Products,
                    attributes: ['name'],
                    required: true
                }
            ],
            group: ['product_id']
        });
        return { code: 1, data: productCards };
    } catch (err) {
        return { code: 0, data: err.message };
    }
}


async function findAllGroupByProductAvailable() {
    try {
        const productCards = await ProductCards.findAll({
            attributes: [
                'product_id',
                [sequelize.fn('COUNT', sequelize.col('product_id')), 'total'], //Product name 
            ],
            include: [
                {
                    model: Products,
                    attributes: ['name'],
                    required: true
                }
            ],
            where: {
                status: 0
            },
            group: ['product_id']
        });
        return { code: 1, data: productCards };
    } catch (err) {
        return { code: 0, data: err.message };
    }

}


async function findFirstCardByProductAndStorage(product_id, storage_id) {
    try {
        const productCard = await ProductCards.findOne({
            where: {
                product_id: product_id,
                storage_id: storage_id,
                status: 0
            }
        });
        return { code: 1, data: productCard };
    } catch (err) {
        return { code: 0, data: err.message };
    }
}

async function updateSaleId(id, sale_id){
    try {
        const productCard = await ProductCards.update({
            sale_id: sale_id
        }, {
            where: {
                id: id
            }
        });
        return { code: 1, data: productCard };
    } catch (err) {
        return { code: 0, data: err.message };
    }
}


async function findAllBySale(sale_id) {
    try {
        const productCards = await ProductCards.findAll({
            where: {
                sale_id: sale_id
            }
        });
        return { code: 1, data: productCards };
    } catch (err) {
        return { code: 0, data: err.message };
    }
}
//   sale_net: 0,
//   sale_gross: 0,
//   sale_tax: 0,
//   utility: 0,
//   sale_price_list_id: null,
//   sale_id: null,

async function updateSaleValues(id, sale_id, sale_net, sale_tax, sale_gross, sale_price_list_id) {
    const productCard = await ProductCards.update({
        sale_id: sale_id,
        sale_net: sale_net,
        sale_tax: sale_tax,
        sale_gross: sale_gross,
        sale_price_list_id: sale_price_list_id
    }, {
        where: {
            id: id
        }
    }).then(data => {
        return { code: 1, data: data }
    }).catch(err => {
        return { code: 0, data: err }
    })

   
    return productCard


}

async function findAllBySaleAndProduct(sale_id, product_id) {
  const productCard = await ProductCards.findAll({
    where: {
      sale_id: sale_id,
      product_id: product_id
    }
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return productCard;
}

// findAllBySaleAndProduct(sale_id, product_id)
// updateSaleDetail(id, sale_detail_id)

async function updateSaleDetail(id, sale_detail_id){
  const productCard = await ProductCards.update({
    sale_detail_id: sale_detail_id
  }, {
    where: {
      id: id
    }
  }).then(data => {
    return { code: 1, data: data }
  }).catch(err => {
    return { code: 0, data: err }
  })

  return productCard

}





productCards.create = create;
productCards.findAllByProduct = findAllByProduct;
productCards.countAllByProduct = countAllByProduct;
productCards.countAllGroupByProductStorageAndStatus = countAllGroupByProductStorageAndStatus;
productCards.findAllGroupByProductStorageAndStatus = findAllGroupByProductStorageAndStatus;
productCards.findAllGroupByProductAndStatus = findAllGroupByProductAndStatus;
productCards.updateStatus = updateStatus;
productCards.findAllGroupByProduct = findAllGroupByProduct;
productCards.findFirstCardByProductAndStorage = findFirstCardByProductAndStorage;
productCards.findAllGroupByProductAvailable = findAllGroupByProductAvailable;
productCards.updateSaleId = updateSaleId;
productCards.findAllBySale = findAllBySale;
productCards.updateSaleValues = updateSaleValues
productCards.findAllBySaleAndProduct = findAllBySaleAndProduct;
productCards.updateSaleDetail = updateSaleDetail;

module.exports = productCards;
