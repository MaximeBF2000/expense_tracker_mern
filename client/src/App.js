import React from 'react'
import { GlobalProvider } from "./context/State"
import Transactions from "./components/Transactions"
import AddTransaction from "./components/AddTransaction"
import Balance from "./components/Balance"
import Total from "./components/Total"

function App() {
  return (
    <GlobalProvider>
      <div className="ET_container">
        <h1>Expense tracker</h1>
        <Total />
        <Balance />
        <AddTransaction />
        <Transactions />
      </div>
    </GlobalProvider>
  )
}

export default App
