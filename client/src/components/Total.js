import React, { useContext } from 'react'
import { GlobalContext } from "../context/State"

export default function Total() {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(el => el.amount)
  const total = amounts.length > 0 ? amounts.reduce((a, c) => (a + c), 0) : 0

  return (
    <div className="total">
      <span>Total:</span>
      <span>{total} €</span>
    </div>
  )
}
