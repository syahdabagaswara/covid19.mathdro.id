import React from 'react';
import './style.css';
// import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Avatar from './Avatar.png';

function Dropdown() {
  return (
    <div className="dropdown">
      <div className="dropdown-content">
        <img src={Avatar} alt="avatar default" className="dropdown-avatar" />
      </div>
      <Icon icon="fa fa-angle-down" size="18" color="#808080" />
      <div className="dropdown-item-content">
        <ul>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

// Dropdown.propTypes = {
//   username: PropTypes.string,
// };

export default Dropdown;
