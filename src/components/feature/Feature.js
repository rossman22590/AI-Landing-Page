import React from 'react';
import './feature.scss';

const Feature = ({title, text}) => {
  return <div className='feature'>
    <div className="feature__title">
      <div /> {/* this is an empty div */ }
      <h3>{title}</h3>
    </div>
    <div className="feature__text">
      <p>{text}</p>
    </div>
  </div>;
};

export default Feature;
