import React from 'react';

const SignUp = (props) => {
    return (
        <div className="signup-tab" style={props.animation}>
            <h2 class="main-title">Sign Up</h2>

            <div className="field-group">
                <input type="text" name="name" id="name" className="field" />
                <label for="name">Name</label>
            </div>

            <div className="field-group">
                <input type="text" name="email" id="email" className="field" />
                <label for="email">Email</label>    
            </div>

            <div className="field-group">
                <input type="text" name="pass" id="pass" className="field" />
                <label for="pass">Password</label>
            </div>
            
            <button className="btn-default" type="submit">Sign Up</button>
        </div>
    )
}

export default SignUp;