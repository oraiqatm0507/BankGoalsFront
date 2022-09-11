import React from 'react'

import '../CSS/Auth.css'


function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function signIn(event) {
    event.preventDefault();
   

  }

  const onForgotPassword = () =>{

  }

  //Realm
  

  return (
    <div>
      <div className='banner' />
      <form className='authContainerForm'>
        <h2 className='formTitle'>Login</h2>
        <div className='formItem'>
          <label htmlFor='Email' className='formLabel'>Email:</label>
          <br />
          <input
            className='inputField'
            id='email'
            type="email"
            value={email}
            placeholder="john_doe@gmail.com"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='formItem'>
          <label htmlFor='Password' className='formLabel'>Password:</label>
          <br />
          <input
            className='inputField'
            id='password'
            type="password"
            value={password}
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='subContainer'>
          <div className='rememberMe'>
            <input
              id='rememberme'
              type="checkbox"
            />
            <label htmlFor='RememberMe' className='formLabel'>Remember Me</label>
          </div>
          <button className='forgotPass' onClick={() => onForgotPassword}>Forgot Password? </button>
          {/* <a className='forgotPass' href='/SignUp'>Forgot Password?</a> */}

        </div>
        <div className='formItem'>
          <button className='authBtn' onClick={signIn}>Sign IN</button>
        </div>

        <p className='createSignIn'>
          New User?
          <a className='forgotPass' href='/CreateAccount'> Create An Account</a>
        </p>
      </form>
    </div>
  )
}

export default Login