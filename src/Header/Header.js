import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


export default function Header(props) {
    return (
        <header className='header'>
        <Link to={'/'}>
          <h1>YOGA TRACK</h1>
        </Link>
      </header>
    )
}