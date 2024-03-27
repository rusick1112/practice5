import React, { useState } from 'react';
import './header.css'

const Header =() => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <header className="header">
        <div className="menu">
          <button onClick={toggleMenu}>Меню</button>
          {isMenuOpen && (
            <ul className="menu-list">
              <li><a href="#">Главная</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Услуги</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          )}
        </div>
        <div className="logo">
          
        </div>
        <div className="search">
          <input type="text" placeholder="Поиск" />
        </div>
      </header>
    );
  }

export default Header;