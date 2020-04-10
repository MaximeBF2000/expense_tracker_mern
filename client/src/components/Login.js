import React, { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="login_container">
      <div className="login_box container">
        <h2>Login</h2>
        <p className="subtitle">or enter a new pseudo to create an account</p>
        <form>
          <div className="input-group">
            <input type="text" name="pseudo" className="input" value={username} onChange={e => setUsername(e.target.value)}/>
            <label htmlFor="pseudo" className="label">Username</label>
          </div>
          <div className="input-group">
            <input type="password" name="password" className="input" value={password} onChange={e => setPassword(e.target.value)}/>
            <label htmlFor="password" className="label">Password</label>
          </div>
          <button type="submit" className="loginBtn">Login</button>
        </form>
      </div>
    </div>
  )
}
