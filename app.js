const express = require("express")
const app = express()
const env = require('dotenv').config()

const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=> console.log(`server running on ${PORT}`))

