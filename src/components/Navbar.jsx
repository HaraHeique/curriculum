import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const slideNavElem = useRef();

  const openNav = (event) => {
    event.preventDefault();
    slideNavElem.current.classList.add('show-menu');

    setTimeout(function () {
      // Para quando clickar fora do menu e fechar o side-bar do mesmo jeito
      document.addEventListener('click', checkClickOutsideNav);
    }, 500);

    function checkClickOutsideNav(event) {
      if (!event.target.classList.value.split(' ').some(elem => ['slide-nav', 'head'].includes(elem))) {
        closeNav();
        document.removeEventListener('click', checkClickOutsideNav);
      }
    }
  };

  const closeNav = (event = null) => {
    event?.preventDefault();
    slideNavElem.current.classList.remove('show-menu');
  };

  return (
    <header>
      <nav>
        <div className="open">
          <i className="fa fa-bars" aria-hidden="true" onClick={openNav}></i>
        </div>
        <div ref={slideNavElem} className="slide-nav" id="slide-nav">
          <div className="head">
            <div className="close">
              <i className="fa fa-times-circle" aria-hidden="true" onClick={closeNav}></i>
            </div>
          </div>
          <ul className="topnav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/my-curriculum">Curriculum</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;