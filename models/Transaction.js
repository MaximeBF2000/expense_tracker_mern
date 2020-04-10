const mongoose = require("mongoose")

const Transaction = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("transactions", Transaction)