import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <nav className="navbar fixed-top navbar-expand-lg">
    <h3 className="brand-logo">Color My Memory</h3>
    <span className="navbar-text">SCORE: {props.currentScore}</span>
    <span className="navbar-text">TOP SCORE: {props.topScore}</span>
  </nav>
);

export default Navbar;
