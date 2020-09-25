import React from 'react';
import Dashboard from '../src/js/components/Dashboard';
import Welcome from '../src/js/components/Welcome';
import { Container } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom'


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Container>
                    <Route path="/welcome" component={() => <Welcome />}></Route>
                
                    <Route path="/" exact component={() => <Dashboard/>}></Route>
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;
