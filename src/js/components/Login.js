import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className="login-tab" style={props.animation}>
            <h2 class="main-title">Log In</h2>
            
            <div className="field-group">
                <input type="text" name="email" id="email" className="field" />
                <label for="email">Email</label>
            </div>

            <div className="field-group">
                <input type="text" name="pass" id="pass" className="field" />
                <label for="pass">Password</label>
            </div>

            <Link className="forgot-password">Forgot your password?</Link>

            <button className="btn-default" type="submit">Login</button>
        </div>
    )
}

export default Login;