import React from 'react'
import '../CSS/Auth.css'
import UserLoginQuery from '../Backend/UserLoginQuery';
import { useSelector, useDispatch } from 'react-redux'
import { setUser, emptyUser } from '../Backend/userSlice'

import { useNavigate } from 'react-router-dom';



function Login() {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  const [email, setEmail] = React.useState('test2@gmail.com');
  const [password, setPassword] = React.useState('test123');
  const [loginBtn, setLoginBtn] = React.useState(false)

  function signIn(event) {
    event.preventDefault();
    //setLoginBtn(true);
    dispatch(setUser({id: user.id, email: user.email, accBalance: user.accBalance, accSavingBalance:user.accSavingBalance, loggedIn: true}))
    navigate('/MoneyGoals')

  }

  const onForgotPassword = () =>{

  }

  function cancelUserLoginQuery(data){
    setLoginBtn(false);
    dispatch(setUser({id: "1", email:'', accBalance: 4000000, loggedIn: true}))
    navigate('/MoneyGoals')

  }


  //Realm
  

  return (

    <div>
      {loginBtn && <UserLoginQuery userEmail={email} userPassword={password} cleanUpFunc={cancelUserLoginQuery} />}
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