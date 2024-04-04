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


const { CashRegisterMovements, CashRegisters, SalePoints } = require('../db')
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
            if (movement.type == 0) {
                cash += movement.credit
            } else {
                cash -= movement.debit
            }
        })

         return { code: 1, data: cash };
    } catch (err) {
        return { code: 0, data: err}
    }
    


}


cashRegisterMovements.create = create
cashRegisterMovements.findAllByCashRegister = findAllByCashRegister
cashRegisterMovements.findLastByCashRegister = findLastByCashRegister
cashRegisterMovements.cashAmount = cashAmount

module.exports = cashRegisterMovements