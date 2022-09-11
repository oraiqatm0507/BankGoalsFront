import React from 'react'
import '../CSS/NavBar.css'


function NavBar() {
    return (
        <div className="navbar">
            <h1> <a href='/'> YABT: Money Goals </a> </h1>
            <div className="links">
                <ul>
                    <li><a href='/MoneyGoals'> Achievements </a></li>
                    <li><a href='/MoneyGoals'> UpComming </a></li>
                    <li><a href='/MoneyGoals'> Goals </a></li>
                    <li><a href='/MoneyGoals'> Processing </a></li>
                    <li><a className='SignInBtn' href='/SignIn'>Log In</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;