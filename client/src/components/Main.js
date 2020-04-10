import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { GlobalProvider } from "../context/State"
import App from "../App"
import Login from "../components/Login"

export default function Main() {
  return (
    <GlobalProvider>
      <Router>
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={Login}/>
      </Router>
    </GlobalProvider>
  )
}
