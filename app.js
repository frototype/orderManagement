const express = require("express")
const path = require("path")
const app = express()
const env = require('dotenv').config()
const userRouter = require('./routes/userRoutes')


const PORT = process.env.PORT || 3000


app.use('/',userRouter)


app.set("view engine","ejs")
app.set("views",[path.join(__dirname,'views/user')])
app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT,()=> console.log(`server running on ${PORT}`))

