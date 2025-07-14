import React, { useState, useEffect } from 'react';

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (totalScroll / windowHeight) * 100;
        setProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="progressBar" style={{ width: `${progress}%` }}></div>
    );
}

export default ProgressBar;