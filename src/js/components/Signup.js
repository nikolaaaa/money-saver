import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {

    // constructor(props) {
    //     super(props);
    // }


    test = () => {
        const user = {
            name: 'Nikola Angelov',
            email: 'angelov.nikola@abv.bg',
            password: '12345678'
        };

        axios.post(`http://localhost:3000/api/user/signup`, user)
            .then(res => {
                console.log(res.data, 'res data');
            })
            .catch((err) => {
                console.log(`Something went wrong while sign up ${err}`);
            })
    }

    render() {
        return (
            <div className="signup-tab">
                <h2 className="main-title">Sign Up</h2>

                <div className="field-group">
                    <input type="text" name="name" id="name" className="field" />
                    <label htmlFor="name">Name</label>
                </div>

                <div className="field-group">
                    <input type="text" name="email" id="email" className="field" />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="field-group">
                    <input type="text" name="pass" id="pass" className="field" />
                    <label htmlFor="pass">Password</label>
                </div>

                <button className="btn-default" type="submit" onClick={this.test}>Sign Up</button>
            </div>
        )
    }
}

export default SignUp;