import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function Icon(props) {
  const iconStyle = {
    color: props.color,
    fontSize: `${props.size}px`,
  };

  return (
    <div className="icon-content">
      <i className={`icon-style ${props.icon}`} style={iconStyle}>
        {Number(props.badge) > 0 ? (
          <span className="badge">{props.badge}</span>
        ) : (
          ''
        )}
      </i>
    </div>
  );
}

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  badge: PropTypes.string,
};

export default Icon;
