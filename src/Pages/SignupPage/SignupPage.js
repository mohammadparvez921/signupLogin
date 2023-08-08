import React, { useState } from 'react'
import './SignupPage.css'
import { Link } from 'react-router-dom';
function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [number, setNumber] = useState();
  const [education, setEducation] = useState('');
  function handleSubmit() {

  }

  return (
    <>
      <div className="signup-container">
        <h1 >Create An Account</h1>
        {error && <div style={{ color: 'red' }} className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={username}
              placeholder=' Username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              value={email}
              placeholder=' Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>

            <input
              type="password"

              value={password}
              placeholder=' Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label>

            <select name="Highest Qualification level" id="qualification" onChange={(e) => setEducation(e.target.value)}>
              Highest Education Level
              <option value="Highest Education Level">Highest Education Level</option>
              <option value="Graduation">Graduation</option>
              <option value="Highschool">Highschool</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Class 8">Class 8</option>
            </select>
          </label>
          <br />
          <label>
            <input id="phone" type="tel" name="phone"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              placeholder=' Mobile Number'
            />


          </label>
          <br />

          <br />
          <button type="submit">Create New Account</button>
        </form>
        <span>Already Registered? <Link to="/login"  style={{
              textDecoration: 'none', 
              fontWeight: 'bold',     
            }}>Login</Link></span>
      </div>


    </>
  )
}

export default SignupPage