import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const logInHandler = (formData) => {
        console.log(formData);
        axios.post(`http://localhost:3000/api/user/login`, formData)
            .then(res => {
                console.log(res.data, 'User is logged in');
            })
            .catch((err) => {
                console.log(`Something went wrong while log in ${err}`);
            })
    }
    
    return (
        <div className="login-tab">
            <h2 className="main-title">Log In</h2>
            
            <form onSubmit={handleSubmit(logInHandler)} noValidate>
                <div className="field-group">
                    <input type="text" name="email" id="email" className="field" ref={register({ required: true })}/>
                    <label htmlFor="email">Email</label>
                </div>

                <div className="field-group">
                    <input type="password" name="password" id="password" className="field" ref={register({ required: true })}/>
                    <label htmlFor="password">Password</label>
                </div>

                <Link to="" className="forgot-password">Forgot your password?</Link>
                
                <button className="btn-default" type="submit" onClick={logInHandler}>Login</button>
            </form>
        </div>
    )

}

export default Login;