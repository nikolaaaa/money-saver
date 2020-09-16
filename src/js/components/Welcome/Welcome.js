import React from 'react';
import Login from '../Login';
import Signup from '../Signup';

class Welcome extends React.Component {
    activeTab = 'test 0';
    // let sidebarBtnText = 'Login';


    // const activeScreen = (tab) => {
    //     if (tab === "Login") {
    //         activeTab = <Login />
    //     } else {
    //         activeTab = <Signup />
    //         sidebarBtnText = 'Sign Up';
    //     }

    //     return activeTab;
    // }

    constructor(props) {
        super(props);

        this.state = {
            isLogView: true,
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ isLogView: !this.state.isLogView });
    }

    render() {
        let { isLogView } = this.state;

        return (
            <div className="welcome-screen">
                <div className={'login-register ' + (isLogView ? 'move' : '')}>
                    <Login className={!isLogView ? 'active' : ''}/>
                    <Signup className={isLogView ? 'active' : ''}/>
                </div>

                <div
                    className={'sidebar ' + (!isLogView ? ('move') : (''))}
                >
                    <div className="sidebar-content">
                        <div className="info-register">
                            <h2>Hello, Friend!</h2>
                            <p>Enter your personal details and start journey to save money</p>
                        </div>

                        <div className="info-login">
                            <h2>Welcome Back!</h2>
                            <p>Too keep connected with us please login with your personal info</p>
                        </div>

                        <button className="btn-default" onClick={this.toggle}>{isLogView ? ('Login') : ('Sign Up')}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;