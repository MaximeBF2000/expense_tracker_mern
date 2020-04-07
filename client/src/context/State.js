import React, { createContext, useReducer } from "react"
import AppReducer from "./Reducer"
import uuid from "uuid"

const initialState = {
  transactions: [
    {
      id: uuid(),
      name: "Salary",
      amount: 1500
    },
    {
      id: uuid(),
      name: "Book",
      amount: -25
    },
  ],
  incomes: 0,
  expenses: 0
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const addTransaction = transaction => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    })
  }

  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    })
  }

  return(
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      incomes: state.incomes,
      expenses: state.expenses,
      addTransaction,
      deleteTransaction
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}