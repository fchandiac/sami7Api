// description: DataTypes.STRING,
// type: DataTypes.INTEGER,
// previous_balance: DataTypes.DECIMAL(10, 2),
// debit: DataTypes.DECIMAL(10, 2),
// credit: DataTypes.DECIMAL(10, 2),
// balance: DataTypes.DECIMAL(10, 2),
// reference_id: DataTypes.INTEGER,
// user_id: DataTypes.INTEGER,
// paymentMethod_id: DataTypes.INTEGER,
// cash_register_id: DataTypes.INTEGER

// async function create(name, description) {
//     const categorie = await Categories.create({
//         name: name,
//         description: description
//     }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
//     return categorie
// }


const { CashRegisterMovements, CashRegisters, SalePoints, PaymentMethods, Users } = require('../db')
const cashRegisterMovements = {}

async function create(cash,description, type, previous_balance, debit, credit, balance, reference_id, user_id, cash_register_id, payment_method_id) {
    const cashRegisterMovement = await CashRegisterMovements.create({
        cash: cash,
        description: description,
        type: type,
        previous_balance: previous_balance,
        debit: debit,
        credit: credit,
        balance: balance,
        reference_id: reference_id,
        user_id: user_id,
        cash_register_id: cash_register_id,
        payment_method_id: payment_method_id
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return cashRegisterMovement
}

async function findAllByCashRegister(cash_register_id) {
    const cashRegisterMovement = await CashRegisterMovements.findAll({
         where: { cash_register_id: cash_register_id }, 
         include: [Users, PaymentMethods],
         order: [['createdAt', 'DESC']]
        }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return cashRegisterMovement
}

async function findLastByCashRegister(cash_register_id) {
    const cashRegisterMovement = await CashRegisterMovements.findOne({
         where: { cash_register_id: cash_register_id }, 
         order: [['createdAt', 'DESC']]
        }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return cashRegisterMovement
}

async function cashAmount(cash_register_id) {
    try {
        const movements = await CashRegisterMovements.findAll({
            where: { cash_register_id: cash_register_id, cash: true},
        })

        let cash = 0

        movements.forEach(movement => {
            let amount = movement.debit - movement.credit
            cash += amount
        })

         return { code: 1, data: cash };
    } catch (err) {
        return { code: 0, data: err}
    }
}

async function noCashAmount(cash_register_id) {
    try {
        const movements = await CashRegisterMovements.findAll({
            where: { cash_register_id: cash_register_id, cash: false},
        })

        let cash = 0

        movements.forEach(movement => {
            let amount = movement.debit - movement.credit
            cash += amount
        })

         return { code: 1, data: cash };
    } catch (err) {
        return { code: 0, data: err}
    }   

}

async function findAllByCashRegisterAndPaymentMethod(cash_register_id, payment_method_id) {
    const cashRegisterMovement = await CashRegisterMovements.findAll({
         where: { cash_register_id: cash_register_id, payment_method_id: payment_method_id }, 
         include: [Users, PaymentMethods],
         order: [['createdAt', 'DESC']]
        }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return cashRegisterMovement
}

async function findAllByCashRegisterAndType(cash_register_id, type) {
    const cashRegisterMovement = await CashRegisterMovements.findAll({
         where: { cash_register_id: cash_register_id, type: type }, 
         include: [Users, PaymentMethods],
         order: [['createdAt', 'DESC']]
        }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return cashRegisterMovement
}

async function voidById(id) {
    const cashRegisterMovement = await CashRegisterMovements.update({
        nulled: true
    }, {
        where: { id: id }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return cashRegisterMovement
}

async function findAllNulledBetweenDates(start_date, end_date) {
    const cashRegisterMovement = await CashRegisterMovements.findAll({
        where: {
            nulled: true,
            createdAt: {
                [Op.between]: [start_date, end_date]
            },
            order: [['createdAt', 'DESC']]
        }
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return cashRegisterMovement
}



cashRegisterMovements.create = create
cashRegisterMovements.findAllByCashRegister = findAllByCashRegister
cashRegisterMovements.findLastByCashRegister = findLastByCashRegister
cashRegisterMovements.cashAmount = cashAmount
cashRegisterMovements.noCashAmount = noCashAmount
cashRegisterMovements.findAllByCashRegisterAndPaymentMethod = findAllByCashRegisterAndPaymentMethod
cashRegisterMovements.findAllByCashRegisterAndType = findAllByCashRegisterAndType
cashRegisterMovements.voidById = voidById
cashRegisterMovements.findAllNulledBetweenDates = findAllNulledBetweenDates

module.exports = cashRegisterMovements