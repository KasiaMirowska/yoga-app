import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import YogaContextProvider from './Context';

ReactDOM.render(
    // <Errors>
    <BrowserRouter>
        <YogaContextProvider>
            <App />
        </YogaContextProvider>
    </BrowserRouter>,
    // </Errors>  
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
