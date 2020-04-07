import React, { useContext } from 'react'
import { GlobalContext } from "../context/State"

export default function Balance() {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(e => e.amount)

  const incomes = amounts.length > 0 ? +amounts.filter(e => e >= 0).reduce((a, c) => (a += c), 0) : 0
  const expenses = amounts.length > 0 ? +amounts.filter(e => e < 0).reduce((a, c) => (a += c), 0) : 0

  return (
    <div className="balance">
      <div className="center income">
        <h3> Income </h3>
        <p> {incomes} € </p>
      </div>
      <div className="center expense">
        <h3> Expense </h3>
        <p> {Math.abs(expenses)} € </p>
      </div>
    </div>
  )
}
