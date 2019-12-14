import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';


export default function Nav() {
    return (
        <div>
            <Link to={'/login'} className='link' >
             <Login />
           </Link>
           <Link to={'/register'} className='register'>
             <Register />
           </Link>
        </div>
    )
}