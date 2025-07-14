import React from 'react';

function ServiceDetailItem({ iconSrc, altText, title, description, delay }) {
  return (
    <div className="service-detail-item" data-aos="fade-up" data-aos-delay={delay}>
      <img src={iconSrc} alt={altText} className="detail-icon" loading="lazy" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceDetailItem;