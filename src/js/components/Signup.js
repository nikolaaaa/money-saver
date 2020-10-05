import React, { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { onBlur, onFocus } from './helpers/Form';
import axios from 'axios';

const SignUp = (props) => {
    const [serverError, setServerError] = useState();
    const { register, handleSubmit, watch, errors } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const history = useHistory();

    const handleErrors = (error) => {
        switch (error) {
            case 'USER_ALREADY_CREATED':
                setServerError('User is already created');
                break;

            default:
                break;
        }
    }

    const signUpHandler = formData => {
        axios.post(`http://localhost:3000/api/user/signup`, formData)
            .then(res => {
                props.loading = false;
                history.push("/");
            })
            .catch((err) => {
                handleErrors(err.response.data.message);
                console.log(err + ':', err.response.data.message);
            })
    }
        
    return (
        <div className="signup-tab">
            <h2 className="main-title">Sign Up</h2>

            <form onSubmit={handleSubmit(signUpHandler)} noValidate>
                <div className="field-group">
                    <input type="text" name="name" id="name" className="field"
                        onFocus={(e) => onFocus(e)}
                        onBlur={(e) => onBlur(e)}
                        ref={register({
                            required: 'The field is required',
                            minLength: { value: 5, message: 'Name must contain more than 5 characters.'},
                            maxLength: { value: 20, message: 'Name must contain under 20 characters.' },
                        })} />
                    <label htmlFor="name">Name</label>

                    {errors.name && <p className="field-error">{errors.name.message}</p>}
                </div>

                <div className="field-group">
                    <input type="email" name="email" id="email" className="field"
                        onFocus={(e) => onFocus(e)}
                        onBlur={(e) => onBlur(e)}
                        ref={register({
                            required: 'The field is required',
                            pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Invalid email address'}
                        })} />
                    <label htmlFor="email">Email</label>

                    {errors.email && <p className="field-error">{errors.email.message}</p>}
                    {serverError?.length && <p className="field-error">{serverError}</p>}
                </div>

                <div className="field-group">
                    <input type="password" name="password" id="password" className="field"
                        onFocus={(e) => onFocus(e)}
                        onBlur={(e) => onBlur(e)}
                        ref={register({
                            required: 'The field is required',
                            minLength: { value: 6, message: 'Password must contain more than 6 characters.' }
                        })} />
                    <label htmlFor="password">Password</label>
                    {errors.password && <p className="field-error">{errors.password.message}</p>}
                </div>

                <div className="field-group">
                    <input type="password" name="password_repeat" id="password_repeat" className="field"
                        onFocus={(e) => onFocus(e)}
                        onBlur={(e) => onBlur(e)}
                        ref={register({
                            required: 'The field is required',
                            validate: value => 
                                value === password.current || "The passwords do not match"
                        })} />
                    <label htmlFor="password_repeat">Repeat Password</label>
                    {errors.password_repeat && <p className="field-error">{errors.password_repeat.message}</p>}
                </div>

                <button className="btn-default" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;