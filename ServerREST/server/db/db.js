require("dotenv").config();

const db = require("mysql");

/*var connection = db.createConnection({
  host: process.env.DB_HOST,
  port : process.env.DB_PORT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER
  
});*/
let config = {
  connectionLimit: 100,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  debug: false
};
let pool = db.createPool (config) ;

//const connection = db.createConnection(config);
/*pool.getConnection((err, connection) => {
  //console.log('connection',pool);
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
      }
  }

  if (connection) connection.release()

  return
})
console.log(pool)*/
module.exports = pool;