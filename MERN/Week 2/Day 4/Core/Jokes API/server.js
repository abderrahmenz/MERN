const express = require('express')
const cors = require("cors")
const app = express()
require("dotenv").config()
const port= process.env.port

app.use(express.json(), express.urlencoded({extend: true}), cors())

require("./config/mongoose.config")

require('./routes/country.routes')(app)

app.listen(port, ()=>{
    console.log("Listening to port " + port)
})