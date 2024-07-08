import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">По номеру/ВИНу</Link></li>
          <li><Link to="/price">По цене</Link></li>
          <li><Link to="/make-model">По марке-модели</Link></li>
          <li><Link to="/region">По региону</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;