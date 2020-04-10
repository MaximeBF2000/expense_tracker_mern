import React, { useContext } from 'react'
import { GlobalContext } from "../context/State"

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amount > 0 ? "+" : "-"

  const handleDelete = () => {
    deleteTransaction(transaction._id)
  }

  return (
    <div className="transaction">
      <div className={transaction.amount > 0 ? "income": "expense"}>
        <div className="grid_el delete" onClick={handleDelete}>x</div>
        <div className="grid_el name">{transaction.name}</div>
        <div className="grid_el amount">{sign + Math.abs(transaction.amount)}€</div>
      </div>
    </div>
  )
}
