import React from 'react';
import { Link } from 'react-router-dom';

function CTABanner({ title, subtitle, buttonText, buttonLink, videoSources = [], poster, className = '' }) {
  const hasVideo = videoSources && videoSources.length > 0;

  return (
    <section className={`cta-banner section-spacing ${className}`}>
      {hasVideo && (
        <div className="video-background-wrapper">
          <video autoPlay loop muted playsInline poster={poster}>
            {videoSources.map((src, index) => (
              <source key={index} src={src.src} type={src.type} />
            ))}
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="container text-center">
        <h2 className="headline-01 text-white">{title}</h2>
        <p className="subtitle-example text-white">{subtitle}</p>
        <Link to={buttonLink} className="btn btn-primary">{buttonText}</Link>
      </div>
    </section>
  );
}

export default CTABanner;