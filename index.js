const express = require('express')
const app = express()

app.get("/test",(req,res) =>{
res.json({"message":"testing"})

})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>console.log(`Server is runing at ${PORT}`))