import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Transition from 'react-transition-group/Transition';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
    activeTab = 'test 0';

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
            entering: { width: '200px' },
            entered: {  },
            exiting: { },
            exited: { width: '200px' },
        };

        return (
            <div className={'welcome-screen ' + (toggleFlag ? 'login-screen' : 'signup-screen')}>
                <div className="login-register">
                    <Transition in={toggleFlag} timeout={600}>
                        <React.Fragment>
                            <Login />
                            <Signup />
                        </React.Fragment>
                    </Transition>
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

                    <Transition in={toggleFlag} timeout={600}>
                        <React.Fragment>
                            <Link
                                to={toggleFlag ? '/welcome/login' : '/welcome/sign-up'}
                                className={'btn-default ' + (toggleFlag ? 'btn-login' : 'btn-signup')}
                                onClick={this.toggle}
                                style={transitionStyles}
                            >
                                <span>Login</span>
                                <span>Sign Up</span>
                            </Link>
                        </React.Fragment>
                    </Transition>
                </div>
                
            </div>
        )
    }
}

export default Welcome;