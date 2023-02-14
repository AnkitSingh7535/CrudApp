const express = require('express')
const app = express()
const db = require('./model/conn')

app.use(express.json())




//Create user
app.post("/adduser",(req,res) =>{
    const user = {name:req.body.name,email:req.body.email,phone:req.body.mobile}
    let sql = "INSERT INTO `employee` SET ?"
    db.query(sql,user,(err,result) =>{

        if (err) throw err;
        else res.json(result)
    }) 


})

//ShowUser
app.get("/showuser",(req,res) =>{
let sql ="SELECT * FROM `employee`"
db.query(sql,(err,result) =>{
    if (err) throw err;
    else res.json(result)
}) 


})

//Show a particular
app.get("/showUser/:email",(req,res) =>{
    let sql = `SELECT * FROM employee WHERE email = '${req.params.email}'`
    db.query(sql,(err,reult) =>{
        if (err) throw err
        else 
        res.json(reult)


    })
})

app.delete("/deleteUser/:email",(req,res) =>{
    let emailId = req.params.email
    let sql = `DELETE FROM  employee where email = '${emailId}'`
    db.query(sql,(err,reult) =>{
        if (err) throw err
        else 
        res.json(reult)
    })

})

app.listen(7000,()=>console.log("server is running "))