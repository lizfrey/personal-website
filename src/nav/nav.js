import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './style.scss';

function Nav(props) {
  const location = useLocation().pathname;
  return (
    <nav>
      <ul>
        <div>
          <li className="logo"><NavLink to="/" exact="true">Elizabeth Frey</NavLink></li>
        </div>
        <div className="menu">
          <li className={location === '/projects' ? 'active' : ''}><NavLink to="/projects" exact="true">Projects</NavLink></li>
          <li className={location === '/about' ? 'active' : ''}><NavLink to="/about" exact="true">About</NavLink></li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
