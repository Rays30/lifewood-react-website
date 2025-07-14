import React from 'react';

function ValueCard({ iconSrc, altText, title, description, delay }) {
  return (
    <div className="value-card" data-aos="zoom-in" data-aos-delay={delay}>
      <img src={iconSrc} alt={altText} className="value-icon" loading="lazy" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ValueCard;