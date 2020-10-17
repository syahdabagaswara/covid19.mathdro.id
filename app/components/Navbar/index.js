import React from 'react';
import './style.css';
import Icon from 'components/Icon';
import Dropdown from 'components/Dropdown';

import Logo from './codemi-394x150.png';

function Navbar() {
  return (
    <nav className="navbar-body">
      <div className="navbar-logo">
        <img className="logo" src={Logo} alt="Logo Codemi" />
      </div>
      <div className="navbar-action">
        <Icon icon="fa fa-bell" size="24" color="#737373" badge="10" />
        <Dropdown username="Syahda Bagaswara" />
      </div>
    </nav>
  );
}

export default Navbar;
