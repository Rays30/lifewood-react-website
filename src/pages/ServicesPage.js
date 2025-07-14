import React, { useState, useEffect } from 'react';
// Remove Link import if not directly used
// import { Link } from 'react-router-dom';

// Import reusable components
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import ServiceDetailItem from '../components/ServiceDetailItem';

// Data for service details (can be fetched from API later)
const servicesDetails = [
    {
        id: 1,
        iconSrc: "/assets/images/service_detail_item1.png",
        altText: "Sustainable Material Icon",
        title: "Sustainable Material Sourcing & Development",
        description: "We research, develop, and source innovative eco-friendly materials, from advanced bioplastics to high-performance recycled composites. Our focus is on materials that offer superior durability, minimal environmental impact, and energy efficiency, pushing the boundaries of what's possible in green construction.",
        delay: 0
    },
    {
        id: 2,
        iconSrc: "/assets/images/service_detail_item2.png",
        altText: "Smart Design Icon",
        title: "Smart & Bioclimatic Design",
        description: "Our design philosophy integrates smart technologies with bioclimatic principles to create intelligent, energy-efficient, and comfortable spaces. We focus on optimizing natural light, ventilation, and thermal performance, ensuring every design is adaptive to its environment and enhances user well-being.",
        delay: 100
    },
    {
        id: 3,
        iconSrc: "/assets/images/service_detail_item3.png",
        altText: "Integrated Build Icon",
        title: "Integrated Project Management & Build",
        description: "From initial planning to final execution, our integrated project management ensures seamless delivery. We leverage technological tools for efficient scheduling, resource allocation, and quality control, ensuring your sustainable project is completed on time, within budget, and to the highest standards.",
        delay: 200
    },
    {
        id: 4,
        iconSrc: "/assets/images/service_detail_item4.png",
        altText: "Energy Optimization Icon",
        title: "Renewable Energy Integration",
        description: "We specialize in incorporating renewable energy solutions like solar panels, wind turbines, and geothermal systems into new and existing structures. Our proactive approach ensures your property harnesses the full potential of clean energy, significantly reducing carbon footprint and operational costs.",
        delay: 0
    },
    {
        id: 5,
        iconSrc: "/assets/images/service_detail_item5.png",
        altText: "Certification Icon",
        title: "Sustainability Certification Consulting",
        description: "Navigating the complexities of green building certifications (e.g., LEED, BREEAM, Green Star) can be challenging. Our experts provide comprehensive consulting, guiding you through every step to achieve desired accreditations, validating your commitment to environmental responsibility.",
        delay: 100
    },
    {
        id: 6,
        iconSrc: "/assets/images/service_detail_item6.png",
        altText: "Data Analytics Icon",
        title: "Performance Monitoring & Optimization",
        description: "Our commitment extends beyond construction. We offer post-occupancy performance monitoring using advanced data analytics to ensure your building operates at peak efficiency. We identify areas for optimization, ensuring your investment continues to deliver environmental and economic benefits.",
        delay: 200
    }
];

function ServicesPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 700); // Simulate 700ms loading
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading Services...</p>
            </div>
        );
    }

    return (
        <>
            <PageHero
                title="Our Comprehensive Solutions."
                subtitle="Driving progress with purpose, our services embody adaptability, innovation, and technological excellence."
                videoSources={[
                    { src: "/assets/images/services_hero_section.mp4", type: "video/mp4" },
                    { src: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-works-on-a-computer-7313-large.webm", type: "video/webm" }
                ]}
                poster="https://via.placeholder.com/1600x600/046241/F9F7F7?text=Services+Video+Fallback"
                className="services-hero"
            />

            <section className="section-spacing container">
                <h2 className="text-center headline-01" data-aos="fade-up">Innovating Every Step of the Way</h2>
                <p className="subtitle-example text-center" data-aos="fade-up" data-aos-delay="100">From concept to completion, we offer a suite of services designed for a sustainable future.</p>

                <div className="service-details-grid">
                    {servicesDetails.map(item => (
                        <ServiceDetailItem
                            key={item.id}
                            iconSrc={item.iconSrc}
                            altText={item.altText}
                            title={item.title}
                            description={item.description}
                            delay={item.delay}
                        />
                    ))}
                </div>
            </section>

            <CTABanner
                title="Ready to Transform Your Project?"
                subtitle="Let's discuss how our bespoke solutions can bring your sustainable vision to life."
                buttonText="Schedule a Consultation"
                buttonLink="/contact"
                videoSources={[
                    { src: "/assets/images/service_cta_banner.mp4", type: "video/mp4" },
                    { src: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-works-on-a-computer-7313-large.webm", type: "video/webm" }
                ]}
                poster="https://via.placeholder.com/1600x600/046241/F9F7F7?text=CTA+Video+Fallback"
            />
        </>
    );
}

export default ServicesPage;