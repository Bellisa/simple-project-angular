const router = require('express').Router();
const tables = require("../../db/models/tables");
const pool = require("../../db/db");


router.post('/registration', (req,res)=>{
    res.send('Registration')
})

router.get('/login', async(req,res)=>{

 pool.getConnection((err,conect)=>{
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
      return;
  }
  conect.query( `SELECT * FROM res_types`,(err,ress,rr)=>{
    console.log(ress)
    res.send({ res_types: ress });
  }) 
  })
    
  
  /*try {
    let someRows = await db.query( `SELECT * FROM res_types` );
    console.log(someRows);
    res.send({ res_types: 'ok' });

  } catch ( err ) {
    console.log(err,'not connected!')
    res.status(404).send({ message: "error occured" });
ß
  } 

*?
   /* pool.getConnection((err, connection) =>{
        if (err) {
            console.log(err,'not connected!')
            res.status(404).send({ message: "error occured" });
            return;
          }// not connected!
      
        // Use the connection
        console.log('start',tables.res_types, connection)
        connection.query("select * from ?? ",[`${tables.res_types}`] , (error, results, fields) => {

          console.log(`select * from ${tables.res_types}`,  JSON.stringify(results),fields)
          // When done with the connection, release it. ̰
          
          if (error) {
            res.status(404).send({ message: "error occured" });
          } else {
            res.send({ res_types: results });
          }
          connection.release();
        });
      });*/
    });  

module.exports = router;
