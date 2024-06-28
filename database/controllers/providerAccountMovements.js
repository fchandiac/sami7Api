// const customer_account_movements = {
//   id: null,
//   description: "",
//   type: 0,
//   previous_balance: 0,
//   debit: 0,
//   credit: 0,
//   balance: 0,
//   reference_id: null,
//   provider_id: null,
//   user_id: null,
// };

const { ProviderAccountMovements, Users, Providers } = require("../db");
const { Op } = require("sequelize");
const providerAccountMovements = {};

async function create(
  description,
  type,
  previous_balance,
  debit,
  credit,
  balance,
  reference_id,
  provider_id,
  user_id
) {
  const providerAccountMovement = await ProviderAccountMovements.create({
    description: description,
    type: type,
    previous_balance: previous_balance,
    debit: debit,
    credit: credit,
    balance: balance,
    reference_id: reference_id,
    provider_id: provider_id,
    user_id: user_id,
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return providerAccountMovement;
}

async function findOneById(id) {
  const providerAccountMovement = await ProviderAccountMovements.findOne({
    where: { id: id },
    include: [
      {
        model: Users,
        as: "user",
      },
      {
        model: Providers,
        as: "provider",
      },
    ],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return providerAccountMovement;
}

async function findAllByProvider(provider_id) {
  const providerAccountMovements = await ProviderAccountMovements.findAll({
    where: { provider_id: provider_id },
    order: [["id", "DESC"]],
  
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return providerAccountMovements;
}

async function findLastByProvider(provider_id) {
  const providerAccountMovement = await ProviderAccountMovements.findOne({
    where: { provider_id: provider_id },
    order: [["id", "DESC"]],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return providerAccountMovement;
}


providerAccountMovements.create = create;
providerAccountMovements.findOneById = findOneById;
providerAccountMovements.findAllByProvider = findAllByProvider;
providerAccountMovements.findLastByProvider = findLastByProvider;

module.exports = providerAccountMovements;
