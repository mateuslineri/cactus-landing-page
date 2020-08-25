import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo_green.png';

import './styles.css';

function PageHeader() {
  return (
    <header className="page-header">
      <div className="logo-container">
        <Link to="/">
          <img src={logoImg} alt="Cactus"/>
        </Link>
      </div>

      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/">ABOUT</Link>
          </li>

          <li>
            <Link to="/">CONTACT US</Link>
          </li>

          <li>
            <Link to="/" id="button-buy">BUY NOW</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default PageHeader;