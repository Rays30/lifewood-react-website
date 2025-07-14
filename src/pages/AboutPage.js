import React, { useState, useEffect } from 'react';
// Remove Link import if not directly used, PageHero/CTABanner handles them
// import { Link } from 'react-router-dom'; 

// Import reusable components
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import ValueCard from '../components/ValueCard';

// Data for values on the about page (can be fetched from API later)
const aboutValues = [
    {
        id: 1,
        iconSrc: "/assets/images/about_value_card1.png",
        altText: "Vision Icon",
        title: "Vision",
        description: "To be the global benchmark for integrating sustainable technology into every facet of modern living.",
        delay: 0
    },
    {
        id: 2,
        iconSrc: "/assets/images/about_value_card2.png",
        altText: "Mission Icon",
        title: "Mission",
        description: "To deliver adaptable, innovative, and proactive eco-solutions that empower our clients to build a more resilient and sustainable world.",
        delay: 100
    },
    {
        id: 3,
        iconSrc: "/assets/images/about_value_card3.png",
        altText: "Approach Icon",
        title: "Our Approach",
        description: "A rigorous, data-driven methodology combined with creative problem-solving, ensuring every solution is bespoke and impactful.",
        delay: 200
    }
];

function AboutPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 600); // Simulate 600ms loading
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading About Us...</p>
            </div>
        );
    }

    return (
        <>
            <PageHero
                title="Our Journey to a Sustainable Future."
                subtitle="Driven by innovation, guided by purpose. Discover what makes Lifewood a leader in eco-friendly technology."
                videoSources={[
                    { src: "/assets/images/about_hero_section.mp4", type: "video/mp4" },
                    { src: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-urban-city-sunset-3096-large.webm", type: "video/webm" }
                ]}
                poster="https://via.placeholder.com/1600x600/133020/FFB347?text=About+Video+Fallback"
                className="about-hero"
            />

            <section className="section-spacing container">
                <h2 className="text-center headline-01" data-aos="fade-up">Who We Are</h2>
                <p className="subtitle-example text-center" data-aos="fade-up" data-aos-delay="100">A collective of visionary minds committed to transformative sustainable development.</p>

                <div className="about-us-grid">
                    <div className="about-text-block" data-aos="fade-right">
                        <h3>Our Story: From Vision to Reality</h3>
                        <p>Founded on the principle of 'Always On, Never Off' innovation, Lifewood emerged from a desire to bridge the gap between advanced technology and ecological responsibility. We began with a core team passionate about exploring the adaptive potential of new materials and processes to create spaces that are both intelligent and in harmony with nature.</p>
                        <p>Over the years, our relentless pursuit of excellence has positioned us as a trusted partner in developing solutions that are not just environmentally sound but also economically viable and aesthetically appealing. We're constantly evolving, bringing purposeful speed to every project.</p>
                    </div>
                    <div className="about-image-block" data-aos="fade-left">
                        <img src="/assets/images/about_image_block.webp" alt="Team collaborating on sustainable design" className="responsive-image" loading="lazy" />
                    </div>
                </div>

                <div className="about-values-grid section-spacing">
                    {aboutValues.map(value => (
                        <ValueCard
                            key={value.id}
                            iconSrc={value.iconSrc}
                            altText={value.altText}
                            title={value.title}
                            description={value.description}
                            delay={value.delay}
                        />
                    ))}
                </div>
            </section>

            <CTABanner
                title="Join Us in Shaping a Greener Future."
                subtitle="Let's connect and build something extraordinary together."
                buttonText="Partner With Us"
                buttonLink="/contact"
                videoSources={[
                    { src: "/assets/images/about_cta_banner.mp4", type: "video/mp4" },
                    { src: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-urban-city-sunset-3096-large.webm", type: "video/webm" }
                ]}
                poster="https://via.placeholder.com/1600x600/046241/FFB347?text=CTA+Video+Fallback"
            />
        </>
    );
}

export default AboutPage;