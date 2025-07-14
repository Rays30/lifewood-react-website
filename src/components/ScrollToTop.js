import React, { useState, useEffect } from 'react';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) { // Show button if scrolled down 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            id="scroll-to-top"
            className={`scroll-to-top ${isVisible ? 'show' : ''}`}
            aria-label="Scroll to top"
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
}

export default ScrollToTop;