import React from 'react';
import Welcome from '../src/js/components/Welcome/Welcome';
import { BrowserRouter } from 'react-router-dom'


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Welcome></Welcome>
            </div>
        </BrowserRouter>
    );
}

export default App;
