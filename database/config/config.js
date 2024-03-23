require('dotenv').config()
// module.exports = {
//   username :  '',
//   password : '',
//   database : process.env.DB_NAME,
//   host : process.env.STORAGE,
//   dialect :  process.env.DIALECT,
//   define: {
//     undercored: true
//   }
// }

module.exports = {
  username :  process.env.USER_NAME,
  password : process.env.PASSWORD,
  database :process.env.DATABASE,
  host : process.env.HOST,
  dialect :  process.env.DIALECT,
}


// module.exports = {
//   username :  "",
//   password : "",
//   database : "db",
//   host : "./storage.sqlite",
//   dialect :  "sqlite",
//   define: {
//       underscored: true
//   }
// }
