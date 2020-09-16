import React from 'react';

const SignUp = (props) => {
    return (
        <div className={'signup-tab ' + props.className}>
            <input type="text" name="name" className="field" placeholder="Name"/>
            <input type="text" name="email" className="field" placeholder="Email"/>
            <input type="text" name="pass" className="field" placeholder="Password" />
            <button className="btn-default" type="submit">Sign Up</button>
        </div>
    )
}

export default SignUp;