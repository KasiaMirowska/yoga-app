import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {YogaContextProvider} from './Context';

ReactDOM.render(
    <BrowserRouter>
         <YogaContextProvider>
                    <App />
            </YogaContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
serviceWorker.unregister();
