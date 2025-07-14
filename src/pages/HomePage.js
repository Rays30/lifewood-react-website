import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Link } from 'react-router-dom';

// Import reusable components
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import ServiceCard from '../components/ServiceCard';

// Data for services on the homepage (can be fetched from API later)
const homepageServices = [
    {
        id: 1,
        iconSrc: "/assets/images/index_service_card1.png",
        altText: "Material Innovation Icon",
        title: "Advanced Material Innovation",
        description: "Developing groundbreaking sustainable composites and intelligent building components for superior performance.",
        delay: 0
    },
    {
        id: 2,
        iconSrc: "/assets/images/index_service_card2.png",
        altText: "Smart Integration Icon",
        title: "Smart System Integration",
        description: "Seamlessly integrating energy-efficient and automated systems for optimal comfort and resource management.",
        delay: 100
    },
    {
        id: 3,
        iconSrc: "/assets/images/index_service_card3.png",
        altText: "Consulting Icon",
        title: "Green Project Consulting",
        description: "Providing expert guidance from concept to completion, ensuring every project meets the highest eco-standards.",
        delay: 200
    }
];

function HomePage() {
    const [isLoading, setIsLoading] = useState(true); // State for loading

    useEffect(() => {
        // Simulate data fetching delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // Simulate 800ms loading time
        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container"> {/* You'll need CSS for this */}
                <div className="spinner"></div> {/* And this */}
                <p>Loading Home Page...</p>
            </div>
        );
    }

    return (
        <>
            <PageHero
                title="Shaping Tomorrow, Sustainably."
                subtitle="Innovating materials and smart designs for a future that's always on, never off. Discover the potential of purposeful technology."
                videoSources={[
                    { src: "/assets/images/index_hero_section.mp4", type: "video/mp4" },
                    { src: "https://assets.mixkit.co/videos/preview/mixkit-data-center-server-room-with-rows-of-racks-33306-large.webm", type: "video/webm" }
                ]}
                poster="https://via.placeholder.com/1600x900/133020/F9F7F7?text=Hero+Video+Fallback"
                className="hero-section"
            >
                <Link to="/services" className="btn btn-primary">Explore Our Solutions</Link>
            </PageHero>

            <section className="about-overview container section-spacing">
                <div className="about-content" data-aos="fade-right">
                    <h2 className="headline-01"> Pioneering Eco-Innovation</h2>
                    <p>At Lifewood, we believe in a harmonious blend of cutting-edge technology and environmental stewardship. Our adaptable approach ensures we deliver transformative solutions that stand the test of time, designed with relentless dedication to quality and a proactive vision for global sustainability.</p>
                    <Link to="/about" className="btn btn-secondary">Learn More About Us</Link>
                </div>
                <div className="about-image" data-aos="fade-left">
                    <img src="/assets/images/index_about_image.png" alt="Modern sustainable building design" className="responsive-image" loading="lazy" />
                </div>
            </section>

            <section className="services-summary section-spacing bg-paper">
                <div className="container">
                    <h2 className="text-center headline-01" data-aos="fade-up">Our Core Offerings</h2>
                    <p className="text-center subtitle-example" data-aos="fade-up" data-aos-delay="100">We empower progress with a range of specialized services.</p>
                    <div className="services-grid">
                        {homepageServices.map(service => (
                            <ServiceCard
                                key={service.id}
                                iconSrc={service.iconSrc}
                                altText={service.altText}
                                title={service.title}
                                description={service.description}
                                delay={service.delay}
                            />
                        ))}
                    </div>
                    <div className="text-center" data-aos="fade-up">
                        <Link to="/services" className="btn btn-primary">View All Services</Link>
                    </div>
                </div>
            </section>

            <CTABanner
                title="Ready to Build a Smarter Future?"
                subtitle="Connect with our team to explore how Lifewood can transform your vision into a sustainable reality."
                buttonText="Get In Touch Today"
                buttonLink="/contact"
                videoSources={[
                    { src: "/assets/images/index_cta_banner.mp4", type: "video/mp4" },
                    { src: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-urban-city-sunset-3096-large.webm", type: "video/webm" }
                ]}
                poster="https://via.placeholder.com/1600x600/046241/FFB347?text=CTA+Video+Fallback"
                className="bg-dark-serpent text-white"
            />
        </>
    );
}

export default HomePage;