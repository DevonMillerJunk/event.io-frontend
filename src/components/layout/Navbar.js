import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Event.io',
  icon: 'fas fa-street-view'
};

export default Navbar;
