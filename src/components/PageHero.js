import React from 'react';

function PageHero({ title, subtitle, videoSources = [], poster, className = '', children }) {
  // Determine if a video background should be used
  const hasVideo = videoSources && videoSources.length > 0;

  return (
    <section className={`page-hero ${className}`}>
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
      
      <div className="page-hero-content container" data-aos="fade-up">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {children} {/* For any extra elements like buttons */}
      </div>
    </section>
  );
}

export default PageHero;