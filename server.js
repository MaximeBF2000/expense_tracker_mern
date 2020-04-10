// Imports
const path = require("path")
const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000

// For development only
if(process.env.NODE_ENV === "development"){
  require("dotenv").config()
}

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// MongoDB connection
const connect_db = require("./db_connect")
connect_db()


// Request Handling
const transactionsRouter = require("./routes/transaction")
app.use("/transactions", transactionsRouter)

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "client", "build")))
}


app.listen(PORT, () => console.log(`App listening on port ${PORT}`))