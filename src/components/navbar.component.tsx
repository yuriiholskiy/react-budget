import React from 'react';

type NavbarProps = {
	title?: string;
};

const NavbarComponent: React.FC<NavbarProps> = ({title = 'default title'}) => {
  return (
    <header>
    	<h1>{title}</h1>
    </header>
  );
};

export default NavbarComponent;
