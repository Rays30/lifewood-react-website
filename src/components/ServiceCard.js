import React from 'react';

function ServiceCard({ iconSrc, altText, title, description, delay }) {
  return (
    <div className="service-card" data-aos="zoom-in" data-aos-delay={delay}>
      <img src={iconSrc} alt={altText} className="service-icon" loading="lazy" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;