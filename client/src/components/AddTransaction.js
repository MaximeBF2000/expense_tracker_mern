import React, { useContext, useState } from 'react'
import { GlobalContext } from "../context/State"

export default function AddTransaction() {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const { addTransaction, getTransactions } = useContext(GlobalContext)


  const handleSubmit = e => {
    e.preventDefault()
    const newTransaction = {
      name,
      amount: +amount
    }
    if(name !== "" && +amount !== 0 && amount !== ""){
      addTransaction(newTransaction)
      getTransactions()
      setName("")
      setAmount("")
    }
  }

  return (
    <form className="add_transaction" onSubmit={handleSubmit}>
      <div className="row input-group">
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} className="input" />
        <label htmlFor="name" className="label">Name</label>
      </div>
      <div className="row input-group">
        <input type="number" name="amount" value={amount} onChange={e => setAmount(e.target.value)} className="input"/>
        <label htmlFor="amount" className="label">0</label>
      </div>
      <button type="submit" className="center">Add transaction</button>
    </form>
  )
}
