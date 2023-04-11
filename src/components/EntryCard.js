import React from 'react';
import './EntryCard.css';

const EntryCard = ({
  logo,
  heading,
  subHeading,
  details,
  width,
}) => {
  return (
    <div className="entry-card">
      <div className="logo-container">
        <img src={logo} alt="logo" style={{ width: `${width}px` }} />
      </div>
      <div className="content-container">
        <h3 className="entry-title">{heading}</h3>
        <span className="entry-subtitle">{subHeading}</span>
        {details.map((detail, index) => (
          <div key={index} className="entry-detail">
            {index === 2 ? <p>{detail}</p> : <span>{detail}</span>}
            {index !== details.length - 1 && <br />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntryCard;
