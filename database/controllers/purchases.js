// const purchases = {
//     id: null,
//     description: "",
//     type: 0,
//     utility: 0,
//     net: 0,
//     tax: 0,
//     total: 0,
//     user_id: null,
//     provider_id: null,
//     document_type: null,
//     document_id: null,
//     nulled: false,
//   }

// async function create(
//     name,
//     code,
//     description,
//     stock_control,
//     iva_subject,
//     favorite,
//     purchase_price_id,
//     subcategory_id
//   ) {
//     const product = await Products.create({
//       name: name,
//       code: code,
//       description: description,
//       stock_control: stock_control,
//       iva_subject: iva_subject,
//       favorite: favorite,
//       purchase_price_id: purchase_price_id,
//       subcategory_id: subcategory_id,
//     })
//       .then((data) => {
//         return { code: 1, data: data };
//       })
//       .catch((err) => {
//         return { code: 0, data: err };
//       });
//     return product;
//   }
  

const {Purchases, Users, Providers} = require('../db')
const purchases = {}

async function create(description, type, utility, net, tax, total, user_id, provider_id, document_type, document_id, nulled) {
    const purchase = await Purchases.create({
        description: description,
        type: type,
        utility: utility,
        net: net,
        tax: tax,
        total: total,
        user_id: user_id,
        provider_id: provider_id,
        document_type: document_type,
        document_id: document_id,
        nulled: nulled
    })
    .then(data => {
        return {code: 1, data: data}
    })
    .catch(err => {
        return {code: 0, data: err}
    })
    return purchase
}
  
async function findAll(){
    const purchases = await Purchases.findAll({
        include: Providers, Users
    })
    .then(data => {
        return {code: 1, data: data}
    })
    .catch(err => {
        return {code: 0, data: err}
    })
    return purchases
}



purchases.create = create
purchases.findAll = findAll

module.exports = purchases