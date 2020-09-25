import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className="login-tab" style={props.animation}>
            <h2 className="main-title">Log In</h2>
            
            <div className="field-group">
                <input type="text" name="email" id="email" className="field" />
                <label htmlFor="email">Email</label>
            </div>

            <div className="field-group">
                <input type="text" name="pass" id="pass" className="field" />
                <label htmlFor="pass">Password</label>
            </div>

            <Link to="" className="forgot-password">Forgot your password?</Link>
            
            <button className="btn-default" type="submit">Login</button>
        </div>
    )
}

export default Login;