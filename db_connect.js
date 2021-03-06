const mongoose = require("mongoose")
require("dotenv").config()

const connect_db = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("Connected to mongoDB database !")
  } catch(err){
    console.error(err.message)
  }
}

module.exports = connect_db