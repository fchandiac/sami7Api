require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const port = process.env.PORT //|| 3003


app.set('json spaces', 2)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: '*' }))
app.use(express.static(path.join(__dirname, 'public')))


app.use(require('./routes/records'))
app.use(require('./routes/categories'))
app.use(require('./routes/subcategories'))
app.use(require('./routes/providers'))
app.use(require('./routes/customers'))
app.use(require('./routes/taxes'))
app.use(require('./routes/purchasePrices'))
app.use(require('./routes/priceLists'))
app.use(require('./routes/sellingPrices'))
app.use(require('./routes/storages'))
app.use(require('./routes/products'))
app.use(require('./routes/stocks'))
app.use(require('./routes/stockMovements'))
app.use(require('./routes/salePoints'))
app.use(require('./routes/cashRegisters'))
app.use(require('./routes/cashRegisterMovements'))
app.use(require('./routes/paymentMethods'))
app.use(require('./routes/sales'))
app.use(require('./routes/saleDetails'))
app.use(require('./routes/customerAccountMovements'))
app.use(require('./routes/payments'))
app.use(require('./routes/creditNotes'))
app.use(require('./routes/purchases'))
app.use(require('./routes/purchasesDetails'))
app.use(require('./routes/receptions'))
app.use(require('./routes/productCards'))
app.use(require('./routes/paymentsProviders'))
app.use(require('./routes/providerAccountMovements'))


//test
app.get('/', (req, res) => {
    res.send('Welcome to the API')
})


app.listen(port, () => {
    console.log('server work! at port: ' + port)
})

