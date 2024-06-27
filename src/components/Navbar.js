import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.Title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="about">{props.about}</Link>
            </li>
           
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleHandle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modetext}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  Title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  modetext: PropTypes.string.isRequired,
  toggleHandle: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  Title: "type here",
  about: "type here",
  home: "Home",
  mode: "light",
  modetext: "Enable Dark Mode"
};
