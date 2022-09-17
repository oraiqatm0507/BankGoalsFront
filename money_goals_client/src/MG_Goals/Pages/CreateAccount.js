import React, {useEffect, useState} from 'react'

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setUser, emptyUser } from '../Backend/userSlice'
import CreateAccountQuery from '../Backend/CreateAccountQuery';




function CreateAccount() {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [accountBalance, setAccountBalance] = React.useState('5000000')
  const [accSavingBalance, setAccSavingBalance] = useState('10000000')

  const [createAccBtn, setCreateAccBtn] = useState(false)

  async function createAccount (event) {
    event.preventDefault();
    dispatch(setUser({id: 1, email: email, accBalance: accountBalance, accSavingBalance: accSavingBalance, loggedIn: false}))

    navigate('/SignIn')

  }

  let onForgotPassword = () =>{

  }

  function createComplete(){
    

  }

  

  return (
    <div>
      {createAccBtn &&  <CreateAccountQuery userEmail={email} userPassword={password} accBalance={accountBalance}/>}
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
          <label htmlFor='Name' className='formLabel'>Checking Balance:</label>
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
          <label htmlFor='Name' className='formLabel'>Saving Balance:</label>
          <br />
          <input
            className='inputField'
            id='savingBalance'
            type="text"
            value={accSavingBalance}
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