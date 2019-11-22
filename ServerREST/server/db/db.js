require("dotenv").config();

const db = require("mysql");

/*var connection = db.createConnection({
  host: process.env.DB_HOST,
  port : process.env.DB_PORT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER
  
});*/
var pool = db.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    debug: false
});

module.exports = pool;