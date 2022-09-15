import React from 'react'
import '../CSS/NavBar.css'
import { useSelector, useDispatch } from 'react-redux'

function NavBar() {
    const user = useSelector((state) => state.user.value)


    return (
        <div className="navbar">
            <h1> <a href='/'> YABT: Money Goals </a> </h1>
            <div className="links">
                <ul>
                    <li><a href='/MoneyGoals'> Achievements </a></li>
                    <li><a href='/MoneyGoals'> UpComming </a></li>
                    <li><a href='/MoneyGoals'> Goals </a></li>
                    <li><a href='/MoneyGoals'> Processing </a></li>
                    <li><a className='SignInBtn' href='/SignIn'>{(!user.loggedIn)? "Log In": "Log Out"}</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;