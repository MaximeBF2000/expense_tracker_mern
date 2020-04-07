import React, { useContext } from 'react'
import { GlobalContext } from "../context/State"
import Transaction from "./Transaction"

export default function People() {
  const { transactions } = useContext(GlobalContext)

  return (
    <>
      <h3 className="h3_transaction">Transactions :</h3>
      <ul className="transactions">
        {transactions.map(t => (
          <Transaction key={t.id} transaction={t} />
        ))}
      </ul>
    </>
  )
}
