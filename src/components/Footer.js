import React from 'react'; // Removed useState because setCurrentYear is not needed with this approach
import { Link } from 'react-router-dom';

function Footer() {
    // Directly use the current year, no need for state or useEffect if it's purely static
    const currentYear = new Date().getFullYear();

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-col footer-about">
                    <Link to="/" className="logo">
                        <img src="/assets/images/logo.svg" alt="Lifewood Company Logo" className="logo-image footer-logo" loading="lazy" />
                    </Link>
                    <p>Innovating for a sustainable tomorrow, one solution at a time. Always on, never off.</p>
                </div>
                <div className="footer-col footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
                <div className="footer-col footer-contact">
                    <h3>Contact Us</h3>
                    <p><img src="/assets/images/address_icon.png" alt="Address icon" className="social-icon" loading="lazy" /> 88 GreenTech Avenue, Innovation Park, London, EC1A 1AB, UK</p>
                    <p><img src="/assets/images/mail_icon.png" alt="Email icon" className="social-icon" loading="lazy" /> Email: <a href="mailto:info@lifewood.com">info@lifewood.com</a></p>
                    <p><img src="/assets/images/phone_icon.png" alt="Phone icon" className="social-icon" loading="lazy" /> Phone: <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                </div>
                <div className="footer-col footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.lifewood.com/" aria-label="Lifewood Website"><img src="/assets/images/web_icon.png" alt="Website Icon" className="social-icon" loading="lazy" /></a>
                        <a href="https://www.youtube.com/@LifewoodDataTechnology/videos" aria-label="YouTube"><img src="/assets/images/youtube_icon.png" alt="YouTube Icon" className="social-icon" loading="lazy" /></a>
                        <a href="https://www.linkedin.com/company/lifewood-data-technology-ltd." aria-label="LinkedIn"><img src="/assets/images/linkedin_icon.png" alt="LinkedIn Icon" className="social-icon" loading="lazy" /></a>
                        <a href="https://www.facebook.com/LifewoodPH" aria-label="Facebook"><img src="/assets/images/fb_icon.png" alt="Facebook Icon" className="social-icon" loading="lazy" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>© <span id="current-year-footer">{currentYear}</span> Lifewood. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;