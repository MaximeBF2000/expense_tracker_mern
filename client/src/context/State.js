import React, { createContext, useReducer } from "react"
import AppReducer from "./Reducer"
import axios from "axios"

const initialState = {
  transactions: [],
  loading: false
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getTransactions = async () => {
    console.log("GET TRANSACTIONS !")
    state.loading = true
    const response = await axios.get("/transactions")
    state.loading = false
    dispatch({
      type: "GET_TRANSACTIONS",
      payload: response.data
    })
  }

  const addTransaction = async transaction => {
    state.loading = true
    await axios.post("/transactions", {
      name: transaction.name,
      amount: transaction.amount
    })
    state.loading = false
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    })
    getTransactions()
  }

  const deleteTransaction = async id => {
    state.loading = true
    await axios.delete(`/transactions/delete/${id}`)
    state.loading = false
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    })
    getTransactions()
  }

  return(
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      loading: state.loading,
      getTransactions,
      addTransaction,
      deleteTransaction
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}