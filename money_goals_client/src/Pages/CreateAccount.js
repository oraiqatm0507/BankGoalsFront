import React, {useEffect} from 'react'

import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  let navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [accountBalance, setAccountBalance] = React.useState('')

  async function createAccount (event) {
    event.preventDefault();
     

  }

  let onForgotPassword = () =>{

  }

  return (
    <div>
      <div className='banner' />
      <form className='authContainerForm'>
        <h2 className='formTitle'>Create An Account</h2>
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
          <label htmlFor='Name' className='formLabel'>Account Balance:</label>
          <br />
          <input
            className='inputField'
            id='accountBalance'
            type="text"
            value={accountBalance}
            placeholder="100000"
            onChange={(e) => setAccountBalance(e.target.value)} />
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

        <div className='formItem'>
          <label htmlFor='Password' className='formLabel'>Confirm Password:</label>
          <br />
          <input
            className='inputField'
            id='confirmPassword'
            type="password"
            value={confirmPassword}
            placeholder="*******"
            onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        
        
        <div className='formItem'>
          <button className='authBtn' onClick={createAccount}>Create Account</button>
        </div>

        <p className='createSignIn'>
          Already Have an Account?
          <a className='forgotPass' href='/SignIn'> Login</a>
        </p>
      </form>
    </div>
  )
}

export default CreateAccount