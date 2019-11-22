const router = require('express').Router();
const pool = require("../../db/db");
const tables = require("../../db/models/tables");

router.post('/registration', (req,res)=>{
    res.send('Registration')
})

router.get('/login', (req,res)=>{
    pool.getConnection((err, connection) =>{
        if (err) {
            console.log(err,'not connected!')
            return;}// not connected!
      
        // Use the connection
        connection.query(`select * from ${tables.res_types}`, function (error, results, fields) {
          // When done with the connection, release it.
          connection.release();
          if (error) {
            res.status(404).send({ message: "error occured" });
          } else {
            res.status(201).send({ res_types: result });
          }
          // Handle error after the release.
          
      
          // Don't use the connection here, it has been returned to the pool.
        });
      });
    });  

module.exports = router;
