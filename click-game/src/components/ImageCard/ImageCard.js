import React from 'react';
import('./ImageCard.css');

const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img
        alt={props.name}
        src={props.src}
        id={props.id}
        data-clickedonce={props.clickedonce}
        //onClick={() => props.click(props.id)}
      />
    </div>
  </div>
);

export default ImageCard;
