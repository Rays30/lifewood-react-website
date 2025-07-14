import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import your global components
import Header from './components/Header';
import Footer from './components/Footer';
import NavOverlay from './components/NavOverlay';
import ScrollToTop from './components/ScrollToTop';
import ProgressBar from './components/ProgressBar';

// Import your page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

import './style.css'; // Your main CSS import

// Import AOS CSS directly into React (since we removed it from index.html)
import 'aos/dist/aos.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  // --- Theme Toggle Logic --- (Keep as is, it's fine)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  // --- Mobile Navigation Toggle Logic --- (Keep as is)
  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isNavOpen]);


  // --- AOS Initialization and Refresh Logic (CRUCIAL CHANGES HERE) ---
  useEffect(() => {
    // Dynamically import AOS.js here to ensure it's available only when needed by React
    // This makes it controllable by React's lifecycle
    import('aos')
      .then(AOS => {
        AOS.init({
          duration: 1000,
          once: true,
          disable: 'mobile' // You might consider disabling on mobile if performance is an issue
        });
        // Initial refresh after AOS is loaded and initialized
        AOS.refresh();
      })
      .catch(error => console.error("Failed to load AOS:", error));
  }, []); // Empty dependency array means this runs only once when App mounts

  // Refresh AOS when location.pathname changes (i.e., route changes)
  useEffect(() => {
    window.scrollTo(0, 0); // Always scroll to top on page change
    setIsNavOpen(false); // Close mobile nav when navigating

    // Delay the AOS.refresh() call slightly to allow React to fully render the new DOM
    // This is the most common fix for AOS issues in SPAs
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.refresh();
      }
    }, 50); // A small delay (e.g., 50ms) often works well

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts quickly
  }, [location.pathname]); // Re-run this effect whenever the URL path changes


  return (
    <> {/* React Fragment to return multiple elements */}
      <ProgressBar />
      <NavOverlay isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <Header isNavOpen={isNavOpen} toggleNav={toggleNav} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

// Wrapper to use BrowserRouter for the whole App
function RootApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default RootApp;