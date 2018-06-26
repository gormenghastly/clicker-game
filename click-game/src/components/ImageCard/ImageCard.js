import React from 'react';
import('./ImageCard.css');

const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={props.click} />
    </div>
  </div>
);

export default ImageCard;
