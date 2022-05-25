import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from "react-router-dom";


import Logo from '../../assets/armUcode.png'
import Buscador from '../Buscador/Buscador';

import './Navbar.css';

export default function NavBar() {
  return (
    <header className="navbar">
        <div>
        <NavLink exact to="/" >
            <img src={Logo} width="50" height="50" alt="logo armuCode" />
        </NavLink>
        </div>

          <span className='title'>Movie app</span>
        
        <nav>
            <ul className="list">
                <li className="list-item">
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/favs" >Favoritas</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}