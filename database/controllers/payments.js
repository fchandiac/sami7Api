// const payments = {
//   id: null,
//   description: "",
//   type: null,
//   amount: 0,
//   balance: 0,
//   sale_id: null,
//   user_id: null,
//   pay_date: null,
//   payment_method_id: null,
//   customer_id: null,
//   cash_register_movement_id: null
// };

const { Payments, Users, Customers, PaymentMethods } = require("../db");
const payments = {};
const { Op } = require("sequelize");

async function create(
  description,
  type,
  amount,
  balance,
  sale_id,
  user_id,
  pay_date,
  payment_method_id,
  customer_id,
  cash_register_movement_id
) {
  const payment = await Payments.create({
    description: description,
    type: type,
    amount: amount,
    balance: balance,
    sale_id: sale_id,
    user_id: user_id,
    pay_date: pay_date,
    payment_method_id: payment_method_id,
    customer_id: customer_id,
    cash_register_movement_id: cash_register_movement_id,
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return payment;
}

async function findAllByCustomerId(customer_id) {
  const payment = await Payments.findAll({
    where: { customer_id: customer_id },
    include: [Users, Customers],
    order: [["created_at", "DESC"]],
  })
    .then((data) => {
      return { code: 1, data: data };
    })
    .catch((err) => {
      return { code: 0, data: err };
    });
  return payment;
}

async function findLastByCustomerId(customer_id){
    const payment = await Payments.findOne({
        where: { customer_id: customer_id },
        order: [['id', 'DESC']],
        include: [Users, Customers, PaymentMethods]
    })
    .then(data => {
        return { code: 1, data: data }
    })
    .catch(err => {
        return { code: 0, data: err }
    })
    return payment
}

async function findAllBetweenDates(start, end){
    const payment = await Payments.findAll({
        where: { created_at: { [Op.between]: [start, end] } },
        include: [Users, Customers, PaymentMethods],
        order: [['created_at', 'DESC']]
    })
    .then(data => {
        return { code: 1, data: data }
    })
    .catch(err => {
        return { code: 0, data: err }
    })
    return payment
}

async function findAllBetweenDatesZeroBalance(start, end){
    const payment = await Payments.findAll({
        where: { created_at: { [Op.between]: [start, end] }, balance: 0 },
        include: [Users, Customers, PaymentMethods],
        order: [['created_at', 'DESC']]
    })
    .then(data => {
        return { code: 1, data: data }
    })
    .catch(err => {
        return { code: 0, data: err }
    })
    return payment
}

async function findAllBetweenDatesPositiveBalance(start, end){
    const payment = await Payments.findAll({
        where: { created_at: { [Op.between]: [start, end] }, balance: { [Op.gt]: 0 } },
        include: [Users, Customers, PaymentMethods],
        order: [['created_at', 'DESC']]
    })
    .then(data => {
        return { code: 1, data: data }
    })
    .catch(err => {
        return { code: 0, data: err }
    })
    return payment
}



async function voidById(id) {
  const payment = await Payments.update(
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
  return payment;
}




payments.create = create;
payments.findAllByCustomerId = findAllByCustomerId;
payments.findLastByCustomerId = findLastByCustomerId;
payments.findAllBetweenDates = findAllBetweenDates;
payments.findAllBetweenDatesZeroBalance = findAllBetweenDatesZeroBalance;
payments.findAllBetweenDatesPositiveBalance = findAllBetweenDatesPositiveBalance;
payments.voidById = voidById;

module.exports = payments;