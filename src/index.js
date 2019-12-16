import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import YogaContext from './Context';

ReactDOM.render(
    // <Errors>
    <BrowserRouter>
         <YogaContext.Consumer>
             {(value) => {
                 return (
                    <App props={value}/> 
                 )
             }}
            </YogaContext.Consumer>
    </BrowserRouter>,
    // </Errors>  
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
