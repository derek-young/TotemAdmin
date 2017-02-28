import React from 'react';
import { Link } from 'react-router-dom';
import localStyles from './HeaderStyles.css';

const Header = () => {
  return (
    <div className={localStyles.header + ' clearfix'}>
      <div className = {localStyles.container}>
        <div className={localStyles.left}>
          <Link to="/">
            <img src="img/totem_logo.png" />
          </Link>
        </div>
        <div className={localStyles.right}>
          <Link to="/signin">
            Sign In
          </Link>
          <Link to ="/register">
            <button>
              Register A Venue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
