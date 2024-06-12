// const customer_account_movements = {
//     id: null,
//     description: "",
//     type: 0,
//     previous_balance: 0,
//     debit: 0,
//     credit: 0,
//     balance: 0,
//     reference_id: null,
//     customer_id: null,
//     user_id: null,
//   };

const { CustomerAccountMovements, Users, Customers } = require("../db");
const customerAccountMovements = {};

// async function create(name, description) {
//     const categorie = await Categories.create({
//         name: name,
//         description: description
//     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return categorie
// }

async function create(
  description,
  type,
  previous_balance,
  debit,
  credit,
  balance,
  reference_id,
  customer_id,
  user_id
) {
  const customerAccountMovement = await CustomerAccountMovements.create({
    description: description,
    type: type,
    previous_balance: previous_balance,
    debit: debit,
    credit: credit,
    balance: balance,
    reference_id: reference_id,
    customer_id: customer_id,
    user_id: user_id,
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return customerAccountMovement;
}

async function findAllByCustomerId(customer_id) {
  const customerAccountMovement = await CustomerAccountMovements.findAll({
    where: { customer_id: customer_id },
    include: [Users, Customers],
    order: [["id", "DESC"]],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return customerAccountMovement;
}

async function findLastByCustomerId(customer_id) {
  const customerAccountMovement = await CustomerAccountMovements.findOne({
    where: { customer_id: customer_id },
    order: [["id", "DESC"]],
    include: [Users, Customers],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return customerAccountMovement;
}




async function voidById(id) {
  const customerAccountMovement = await CustomerAccountMovements.update(
    {
      nulled: true,
    },
    {
      where: { id: id },
    }
  )
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return customerAccountMovement;
}



customerAccountMovements.create = create;
customerAccountMovements.findAllByCustomerId = findAllByCustomerId;
customerAccountMovements.findLastByCustomerId = findLastByCustomerId;
customerAccountMovements.voidById = voidById;

module.exports = customerAccountMovements;
