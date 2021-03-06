import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Transition from 'react-transition-group/Transition';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { inject } from 'mobx-react';

@inject('commonStore')
class Welcome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleFlag: false,
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ toggleFlag: !this.state.toggleFlag }); 
    }
    
    render() {
        let { toggleFlag } = this.state;

        const transitionStyles = {
            entering: { opacity: 1 },
            entered: { opacity: 1 },
            exiting: { opacity: 0 },
            exited: { opacity: 1 },
        };

        return (
            <div className={'welcome-screen ' + (toggleFlag ? 'login-screen' : 'signup-screen')}>
            {/* <div className={'welcome-screen'}> */}
                <div className="login-register">
                    <Login />

                    <Signup />
                </div>

                <div className="sidebar">
                    <div className="info-signup">
                        <h2>Hello, Friend!</h2>
                        <p>Enter your personal details and start journey to save money</p>
                    </div>

                    <div className="info-login">
                        <h2>Welcome Back!</h2>
                        <p>Too keep connected with us please login with your personal info</p>
                    </div>

                    <Link
                        to={toggleFlag ? '/welcome/login' : '/welcome/sign-up'}
                        className={'btn-default ' + (toggleFlag ? 'btn-login' : 'btn-signup')}
                        onClick={this.toggle}
                        style={transitionStyles}
                    >
                        <span>Login</span>
                        <span>Sign Up</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Welcome;