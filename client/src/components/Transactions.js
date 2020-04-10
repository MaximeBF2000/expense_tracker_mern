import React, { useContext, useEffect } from 'react'
import { GlobalContext } from "../context/State"
import Transaction from "./Transaction"

export default function Transactions() {
  let { transactions, getTransactions } = useContext(GlobalContext)

  useEffect(() => {
    getTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h3 className="h3_transaction">Transactions :</h3>
      <hr/>
      <ul className="transactions">
        {transactions.map(transaction => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}
