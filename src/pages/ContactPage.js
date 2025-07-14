import React, { useState, useEffect } from 'react'; // Import useState and useEffect
// Remove Link import if not directly used
// import { Link } from 'react-router-dom';

// Import reusable components
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm'; // Make sure this component exists!

function ContactPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // Simulate 500ms loading
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading Contact Us...</p>
            </div>
        );
    }

    return (
        <>
            <PageHero
                title="Let's Connect and Collaborate."
                subtitle="Your vision, our expertise. Reach out to the Lifewood team today."
                className="contact-hero"
            />

            <section className="section-spacing container contact-grid">
                <div className="contact-info" data-aos="fade-right">
                    <h2 className="headline-01">Get in Touch</h2>
                    <p className="subtitle-example">We're here to answer your questions and explore innovative solutions together.</p>

                    <div className="info-item">
                        <img src="/assets/images/phone_icon.png" alt="Phone Icon" className="contact-icon icon-phone" loading="lazy" />
                        <div>
                            <h4>Phone</h4>
                            <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                        </div>
                    </div>
                    <div className="info-item">
                        <img src="/assets/images/mail_icon.png" alt="Email Icon" className="contact-icon icon-email" loading="lazy" />
                        <div>
                            <h4>Email</h4>
                            <p><a href="mailto:info@lifewood.com">info@lifewood.com</a></p>
                        </div>
                    </div>
                    <div className="info-item">
                        <img src="/assets/images/address_icon.png" alt="Address Icon" className="contact-icon icon-address" loading="lazy" />
                        <div>
                            <h4>Address</h4>
                            <p>88 GreenTech Avenue, Innovation Park, London, EC1A 1AB, UK</p>
                        </div>
                    </div>

                    <div className="social-contact">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://www.lifewood.com/" aria-label="Lifewood Website"><img src="/assets/images/web_icon.png" alt="Website Icon" className="contact-social-icon" loading="lazy" /></a>
                            <a href="https://www.youtube.com/@LifewoodDataTechnology/videos" aria-label="YouTube"><img src="/assets/images/youtube_icon.png" alt="YouTube Icon" className="contact-social-icon" loading="lazy" /></a>
                            <a href="https://www.linkedin.com/company/lifewood-data-technology-ltd." aria-label="LinkedIn"><img src="/assets/images/linkedin_icon.png" alt="LinkedIn Icon" className="contact-social-icon" loading="lazy" /></a>
                            <a href="https://www.facebook.com/LifewoodPH" aria-label="Facebook"><img src="/assets/images/fb_icon.png" alt="Facebook Icon" className="contact-social-icon" loading="lazy" /></a>
                        </div>
                    </div>
                </div>

                <ContactForm />

            </section>

            <section className="map-section section-spacing" data-aos="fade-up">
                <h2 className="text-center headline-01">Our Location</h2>
                <p className="subtitle-example text-center">Find us at the heart of innovation.</p>
                <div className="map-placeholder">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-0.1278!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2b8004f12f%3A0x280e22b9b8b8b8b8!2sLondon!5e0!3m2!1sen!2suk!4v1678901234567!5m2!1sen!2suk" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map of Lifewood Office Location"></iframe>
                </div>
            </section>
        </>
    );
}

export default ContactPage;