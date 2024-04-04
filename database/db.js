require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize')
const db = {}
const SQLite = require('sqlite3')
const moment = require('moment');
require('moment/locale/es');

db.connection = new Sequelize(
    process.env.DATABASE,
    process.env.USER_NAME,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT,
    }
)


// db.connection = new Sequelize({
//     dialect: process.env.DIALECT,
//     storage: process.env.STORAGE, // or ':memory:'
//     dialectOptions: {
//         // Your sqlite3 options here
//         //   for instance, this is how you can configure the database opening mode:
//         mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
//     },
//     define: {
//         // Especificar aquí el orden predeterminado
//         // Ejemplo: ordenar por la columna 'id' en orden descendente de forma predeterminada
//         defaultScope: {
//             order: [['id', 'DESC']],
//         },
//         charset: 'utf8', // Definir el conjunto de caracteres
//         collate: 'utf8_spanish_ci', // Definir el modo de comparación de cadenas (ci = case insensitive
        
//     }
// })

db.Profiles = require('./models/profiles')(db.connection, DataTypes)
db.Users = require('./models/users')(db.connection, DataTypes)
db.Records = require('./models/records')(db.connection, DataTypes)
db.Categories = require('./models/categories')(db.connection, DataTypes)
db.Subcategories = require('./models/subcategories')(db.connection, DataTypes)
db.Providers = require('./models/providers')(db.connection, DataTypes)
db.Customers = require('./models/customers')(db.connection, DataTypes)
db.Taxes = require('./models/taxes')(db.connection, DataTypes)
db.PurchasePrices = require('./models/purchasePrices')(db.connection, DataTypes)
db.TaxPurchasePrices = require('./models/taxPurchasePrices')(db.connection, DataTypes)
db.PriceLists = require('./models/priceLists')(db.connection, DataTypes)
db.SellingPrices = require('./models/sellingPrices')(db.connection, DataTypes)
db.TaxSellingPrices = require('./models/taxSellingPrices')(db.connection, DataTypes)
db.Storages = require('./models/storages')(db.connection, DataTypes)
db.Products = require('./models/products')(db.connection, DataTypes)
db.Stocks = require('./models/stocks')(db.connection, DataTypes)
db.StockMovements = require('./models/stockMovements')(db.connection, DataTypes)
db.SalePoints = require('./models/salePoints')(db.connection, DataTypes)
db.CashRegisters = require('./models/cashRegisters')(db.connection, DataTypes)
db.CashRegisterMovements = require('./models/cashRegisterMovements')(db.connection, DataTypes)
db.PaymentMethods = require('./models/paymentMethods')(db.connection, DataTypes)


db.Users.belongsTo(db.Profiles)
db.Subcategories.belongsTo(db.Categories)
db.Records.belongsTo(db.Users)
db.SellingPrices.belongsTo(db.PriceLists)

db.Products.belongsTo(db.Subcategories)
db.Products.belongsTo(db.PurchasePrices)

db.CashRegisterMovements.belongsTo(db.CashRegisters)
db.CashRegisterMovements.belongsTo(db.PaymentMethods)

db.Products.hasMany(db.Stocks)
db.Products.hasMany(db.SellingPrices)
db.SalePoints.hasMany(db.CashRegisters)

db.Stocks.belongsTo(db.Storages)
db.SalePoints.belongsTo(db.Storages)

db.StockMovements.belongsTo(db.Stocks)





db.PurchasePrices.belongsToMany(db.Taxes, { through: db.TaxPurchasePrices })
db.Taxes.belongsToMany(db.PurchasePrices, { through: db.TaxPurchasePrices })

db.SellingPrices.belongsToMany(db.Taxes, { through: db.TaxSellingPrices })
db.Taxes.belongsToMany(db.SellingPrices, { through: db.TaxSellingPrices })




module.exports = db
