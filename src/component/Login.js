import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Login() {

    return (

        <form>
            <div className = "innerForm">
                <h1>amploy</h1>
                <h2>Login</h2>
                <div className = "formGroup">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className = "formGroup">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <Link to = '/Home'> <input type="submit" value="Login"/> </Link>
                <Link to = '/SignUp'> <input type="submit" value="Sign Up"/> </Link>

            </div>

        </form>

    )

}
export default Login;