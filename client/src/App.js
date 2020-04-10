import React from 'react'
import Transactions from "./components/Transactions"
import AddTransaction from "./components/AddTransaction"
import Balance from "./components/Balance"
import Total from "./components/Total"

/**
 * HUGE PROBLEM TO FIX WITH UNIQUE KEYS ?
 * LAUNCH THE APP AND ADD A NEW TRANSACTION TO SEE THE WARNING
 */

function App() {
  return (
    <div className="ET_container">
      <h1>Expense tracker</h1>
      <Total />
      <Balance />
      <AddTransaction />
      <Transactions />
    </div>
  )
}

export default App
