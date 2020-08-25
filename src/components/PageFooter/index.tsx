import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo_white.png';

import './styles.css';

function PageFooter() {
  return(
    <footer>
      <div className="footer-img-container">
        <Link to="/"> 
          <img src={logoImg} alt="cactus"/>
        </Link>
      </div>
    </footer>
  );
}

export default PageFooter;