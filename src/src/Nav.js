import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './login';




function Nav() {
  return (
    <div className="App">
        <ul>
          <li><NavLink to="/" >Login</NavLink></li>
          <li><NavLink to="/register" >Register</NavLink></li>
        </ul>
    </div>
  );
}

export default Nav;
