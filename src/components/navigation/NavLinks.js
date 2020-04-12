import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'

import './NavLinks.css';

const NavLinks = props => {

    return (
        <ul className="nav-links">
          <li>
            <NavLink to="/" exact>
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" >
              ProfilePage
            </NavLink>
          </li>
         
        </ul>
      );
}


export default NavLinks