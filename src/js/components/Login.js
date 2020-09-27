import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    test = () => {
        const user = {
            email: 'angelov.nikola@abv.bg',
            password: '12345678'
        };

        axios.post(`http://localhost:3000/api/user/login`, user)
            .then(res => {
                console.log(res.data, 'User is logged in');
            })
            .catch((err) => {
                console.log(`Something went wrong while log in ${err}`);
            })
    }
    
    render() {
        return (
            <div className="login-tab">
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
                
                <button className="btn-default" type="submit" onClick={this.test}>Login</button>
            </div>
        )
    }
}

export default Login;