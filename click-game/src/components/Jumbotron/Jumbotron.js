import React from 'react';
import './Jumbotron.css';
import './card-slice.jpg';

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <div className="container">
      <h1 className="title">Color My Memory</h1>
      <p className="lead">
        Click on a color tile to earn points, but don't click any more than
        once!
      </p>
    </div>
  </div>
);

export default Jumbotron;
