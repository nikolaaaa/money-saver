import React from 'react';

const Login = (props) => {
    return (
        <div className={'login-tab ' + props.className}>
            <input type="text" name="email" className="field" placeholder="Email"/>
            <input type="text" name="pass" className="field" placeholder="Password"/>
            <button className="btn-default" type="submit">Login</button>
        </div>
    )
}

export default Login;