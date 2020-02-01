import React from 'react';

import header from '../../assets/img/header.png';
import './style.css';

function Header() {
  return (
    <div className="header">
      <img src={header}  className="header-banner" alt="header-banner" />
    </div>
  );
}

export default Header;
