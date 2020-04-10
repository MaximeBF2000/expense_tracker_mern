const express = require("express")
const router = express.Router()
const Transaction = require("../models/Transaction")

router.get("/", async (req, res) => {
  try{
    const transactions = await Transaction.find({})
    res.json(transactions)
  } catch(err){
    console.error(err.message)
  }
})

router.post("/", async (req, res) => {
  const { name, amount } = req.body
  const newTransaction = new Transaction({
    name,
    amount
  })
  try{
    await newTransaction.save()
    console.log("new transaction saved !")
  } catch(err){
    console.error(err.message)
  }
  res.end()
})

router.delete("/delete/:id", async (req, res) => {
  try{
    const id = req.params.id
    const transaction_toDelete = await Transaction.findById(id)
    transaction_toDelete.remove()
    console.log("A transaction has been removed !")
    res.end()
  } catch(err){
    console.error(err.message)
  }
})

module.exports = router