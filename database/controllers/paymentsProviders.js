

// ESTO ES UN EJEMPLO

// const { Payments, Users, Customers, PaymentMethods } = require("../db");
// const payments = {};
// const { Op } = require("sequelize");

// async function create(
//   description,
//   type,
//   amount,
//   balance,
//   sale_id,
//   user_id,
//   pay_date,
//   payment_method_id,
//   customer_id,
//   cash_register_movement_id
// ) {
//   const payment = await Payments.create({
//     description: description,
//     type: type,
//     amount: amount,
//     balance: balance,
//     sale_id: sale_id,
//     user_id: user_id,
//     pay_date: pay_date,
//     payment_method_id: payment_method_id,
//     customer_id: customer_id,
//     cash_register_movement_id: cash_register_movement_id,
//   })
//     .then((data) => {
//       return { code: 1, data: data };
//     })
//     .catch((err) => {
//       return { code: 0, data: err };
//     });
//   return payment;
// }

// async function findAllByCustomerId(customer_id) {
//   const payment = await Payments.findAll({
//     where: { customer_id: customer_id },
//     include: [Users, Customers],
//     order: [["created_at", "DESC"]],
//   })
//     .then((data) => {
//       return { code: 1, data: data };
//     })
//     .catch((err) => {
//       return { code: 0, data: err };
//     });
//   return payment;
// }

// async function findLastByCustomerId(customer_id){
//     const payment = await Payments.findOne({
//         where: { customer_id: customer_id },
//         order: [['id', 'DESC']],
//         include: [Users, Customers, PaymentMethods]
//     })
//     .then(data => {
//         return { code: 1, data: data }
//     })
//     .catch(err => {
//         return { code: 0, data: err }
//     })
//     return payment
// }

// async function findAllBetweenDates(start, end){
//     const payment = await Payments.findAll({
//         where: { created_at: { [Op.between]: [start, end] } },
//         include: [Users, Customers, PaymentMethods],
//         order: [['created_at', 'DESC']]
//     })
//     .then(data => {
//         return { code: 1, data: data }
//     })
//     .catch(err => {
//         return { code: 0, data: err }
//     })
//     return payment
// }

// async function findAllBetweenDatesZeroBalance(start, end){
//     const payment = await Payments.findAll({
//         where: { created_at: { [Op.between]: [start, end] }, balance: 0 },
//         include: [Users, Customers, PaymentMethods],
//         order: [['created_at', 'DESC']]
//     })
//     .then(data => {
//         return { code: 1, data: data }
//     })
//     .catch(err => {
//         return { code: 0, data: err }
//     })
//     return payment
// }

// async function findAllBetweenDatesPositiveBalance(start, end){
//     const payment = await Payments.findAll({
//         where: { created_at: { [Op.between]: [start, end] }, balance: { [Op.gt]: 0 } },
//         include: [Users, Customers, PaymentMethods],
//         order: [['created_at', 'DESC']]
//     })
//     .then(data => {
//         return { code: 1, data: data }
//     })
//     .catch(err => {
//         return { code: 0, data: err }
//     })
//     return payment
// }



// async function voidById(id) {
//   const payment = await Payments.update(
//     {
//       nulled: true,
//     },
//     {
//       where: { id: id },
//     }
//   )
//     .then((data) => {
//       return { code: 1, data: data };
//     })
//     .catch((err) => {
//       return { code: 0, data: err };
//     });
//   return payment;
// }




// payments.create = create;
// payments.findAllByCustomerId = findAllByCustomerId;
// payments.findLastByCustomerId = findLastByCustomerId;
// payments.findAllBetweenDates = findAllBetweenDates;
// payments.findAllBetweenDatesZeroBalance = findAllBetweenDatesZeroBalance;
// payments.findAllBetweenDatesPositiveBalance = findAllBetweenDatesPositiveBalance;
// payments.voidById = voidById;

// module.exports = payments;

 // const paymentsProviders = {
    //   id: null,
    //   description: "",
    //   type: null,
    //   amount: 0,
    //   balance: 0,
    //   purchase_id: null,
    //   user_id: null,
    //   pay_date: null,
    //   payment_method_id: null,
    //   provider_id: null,
    //   nulled: false,
    // }

    // paymentsProviders

const { PaymentsProviders, Users, Providers, PaymentMethods } = require("../db");
const paymentsProviders = {};
const { Op } = require("sequelize");

async function create(
    description,
    type,
    amount,
    balance,
    purchase_id,
    user_id,
    pay_date,
    payment_method_id,
    provider_id
    ) {
    const paymentProvider = await PaymentsProviders.create({
        description: description,
        type: type,
        amount: amount,
        balance: balance,
        purchase_id: purchase_id,
        user_id: user_id,
        pay_date: pay_date,
        payment_method_id: payment_method_id,
        provider_id: provider_id,
    })
        .then((data) => {
        return { code: 1, data: data };
        })
        .catch((err) => {
        return { code: 0, data: err };
        });
    return paymentProvider;
    }

async function findAllByProviderId(provider_id) {
    const paymentProvider = await PaymentsProviders.findAll({
        where: { provider_id: provider_id },
        include: [Users, Providers],
        order: [["created_at", "DESC"]],
    })
        .then((data) => {
        return { code: 1, data: data };
        })
        .catch((err) => {
        return { code: 0, data: err };
        });
    return paymentProvider;
    }


async function findLastByProviderId(provider_id){
    const paymentProvider = await PaymentsProviders.findOne({
        where: { provider_id: provider_id },
        order: [['id', 'DESC']],
        include: [Users, Providers, PaymentMethods]
    })
    .then(data => {
        return { code: 1, data: data }
    })
    .catch(err => {
        return { code: 0, data: err }
    })
    return paymentProvider
}

async function findAllBetweenDates(start, end){
    const paymentProvider = await PaymentsProviders.findAll({
        where: { created_at: { [Op.between]: [start, end] } },
        include: [Users, Providers, PaymentMethods],
        order: [['created_at', 'DESC']]
    })
    .then(data => {
        return { code: 1, data: data }
    })
    .catch(err => {
        return { code: 0, data: err }
    })
    return paymentProvider
}

async function findAllBetweenDatesZeroBalance(start, end){
    const paymentProvider = await PaymentsProviders.findAll({
        where: { created_at: { [Op.between]: [start, end] }, balance: 0 },
        include: [Users, Providers, PaymentMethods],
        order: [['created_at', 'DESC']]
    })
    .then(data => {
        return { code: 1, data: data }
    })
    .catch(err => {
        return { code: 0, data: err }
    })
    return paymentProvider
}

async function findAllBetweenDatesPositiveBalance(start, end){
    const paymentProvider = await PaymentsProviders.findAll({
        where: { created_at: { [Op.between]: [start, end] }, balance: { [Op.gt]: 0 } },
        include: [Users, Providers, PaymentMethods],
        order: [['created_at', 'DESC']]
    })
    .then(data => {
        return { code: 1, data: data }
    })
    .catch(err => {
        return { code: 0, data: err }
    })
    return paymentProvider
}

async function voidById(id) {
    const paymentProvider = await PaymentsProviders.update(
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
    return paymentProvider;
}

paymentsProviders.create = create;
paymentsProviders.findAllByProviderId = findAllByProviderId;
paymentsProviders.findLastByProviderId = findLastByProviderId;
paymentsProviders.findAllBetweenDates = findAllBetweenDates;
paymentsProviders.findAllBetweenDatesZeroBalance = findAllBetweenDatesZeroBalance;
paymentsProviders.findAllBetweenDatesPositiveBalance = findAllBetweenDatesPositiveBalance;
paymentsProviders.voidById = voidById;

module.exports = paymentsProviders;
