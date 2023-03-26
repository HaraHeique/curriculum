import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const openNav = (event) => {
    event.preventDefault();

    console.log("Cliquei para abrir menu lateral");
  };

  const closeNav = (event) => {
    event.preventDefault();

    console.log("Cliquei para fechar menu lateral");
  };

  return (
    <header>
      <nav>
        <div className="open">
          <i className="fa fa-bars" aria-hidden="true" onClick={openNav}></i>
        </div>
        <div className="slide-nav" id="slide-nav">
          <div className="head">
            <div className="close">
              <i className="fa fa-times-circle" aria-hidden="true" onClick={closeNav}></i>
            </div>
          </div>
          <ul className="topnav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/curriculum">Curriculum</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;