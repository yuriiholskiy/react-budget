import React from 'react';

import { Link } from 'react-router-dom';

const NavbarComponent: React.FC = () => {
  return (
    <header>
    	<nav className="px-1 app-budget-nav">
		    <div className="nav-wrapper">
		      <Link to="/" className="brand-logo">Logo</Link>
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li>
		        	<Link to="/">Home</Link>
		        </li>
		        <li>
		        	<Link to="/budget">Budget</Link>
		        </li>
		        <li>
		        	<Link to="/about">About</Link>
		        </li>
		      </ul>
		    </div>
		  </nav>
    </header>
  );
};

export default NavbarComponent;
