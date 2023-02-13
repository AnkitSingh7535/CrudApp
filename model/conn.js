const mysql = require('mysql')

//Database Connection
const db = mysql.createConnection({
  host:"localhost",
  user:'root',
  password:"",
  database:'rps'  

})

db.connect((err)=>{

    if(err) console.log(err.sqlMessage)
    else console.log("Database Connected")

})
module.exports = db