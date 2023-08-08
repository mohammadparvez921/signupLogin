import React, { useState } from 'react';
import './LogInPage.css';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [sucessAlert, setsucessAlert] = useState('');
  // //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();




  };

  return (
    <div className='login'>

      <div className="login-container">
        <h1>Login</h1>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
          <br/>
          <GoogleOAuthProvider clientId="300512809788-ld4a8g9ih2bptefiggrcj1lrnohagamt.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse)
                  }}
                  onError={() => {
                    console.log('Login Failed')
                  }}
                  
                />
              </GoogleOAuthProvider>;


        </form>
        {/* <span>Not registered yet? Signup</span> */}
        <span>Dont have an account?</span> <span className='Signup-button'> <Link to="/" style={{
          textDecoration: 'none', 
          fontWeight: 'bold',     
        }}>Signup!</Link></span>
      </div>
    </div>
  );
}

export default LogInPage;
