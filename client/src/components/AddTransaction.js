import React, { useContext, useState } from 'react'
import { GlobalContext } from "../context/State"
import uuid from "uuid"

export default function AddTransaction() {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const { addTransaction } = useContext(GlobalContext)


  const handleSubmit = e => {
    e.preventDefault()
    const newTransaction = {
      id: uuid(),
      name,
      amount: +amount
    }
    if(name !== "" && +amount !== 0 && amount !== ""){
      addTransaction(newTransaction)
      setName("")
      setAmount("")
    }
  }

  return (
    <form className="add_transaction" onSubmit={handleSubmit}>
      <div className="row">
        <input type="text" placeholder="name" name="name" value={name} onChange={e => setName(e.target.value)} />
        <input type="number" placeholder="0" name="amount" value={amount} onChange={e => setAmount(e.target.value)} />
      </div>
      <button type="submit" className="center">Add transaction</button>
    </form>
  )
}
