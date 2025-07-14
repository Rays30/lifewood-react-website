import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import reusable components
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

// This data is extracted from your original project.html data-attributes
const projectData = [
    {
        id: 1,
        title: "Eco-Smart Urban Farms",
        image: "/assets/images/project_grid1.png",
        description: "Developed intelligent vertical farms integrated with AI for optimal resource management and crop yield in metropolitan areas.",
        fullDescription: "These farms leverage cutting-edge technology to create controlled environments, maximizing food production while minimizing water and land use. Our AI systems monitor plant health, nutrient levels, and growth patterns, ensuring sustainable and efficient operations. This project showcases our commitment to sustainable urban development and food security.",
        tools: "AI, IoT, Hydroponics, Renewable Energy Integration, Data Analytics",
        date: "Completed: Q3 2023",
        role: "Lead System Architect",
        githubLink: "https://github.com/lifewood/eco-smart-farms",
        demoLink: "https://demo.lifewood.com/urban-farms",
        tag: "AI & Agriculture",
        delay: 0
    },
    {
        id: 2,
        title: "Community Energy Hubs",
        image: "/assets/images/project_grid2.jpg",
        description: "Designed and implemented self-sufficient energy grids for rural communities using solar and wind power integration.",
        fullDescription: "These hubs provide reliable, clean energy, reducing reliance on fossil fuels and promoting energy independence for remote areas. The project involved grid stabilization technologies, smart metering solutions, and community training programs to manage and maintain the systems. It significantly improved living standards and economic opportunities in underserved regions.",
        tools: "Solar PV, Wind Turbines, Grid Storage, Smart Metering, Community Engagement Software",
        date: "Completed: Q1 2022",
        role: "Energy Systems Engineer",
        githubLink: null,
        demoLink: "https://demo.lifewood.com/energy-hubs",
        tag: "Renewable Energy",
        delay: 100
    },
    {
        id: 3,
        title: "Next-Gen Biocomposites",
        image: "/assets/images/project_grid3.jpg",
        description: "Pioneering the development of sustainable, high-strength biocomposite materials for various industrial applications.",
        fullDescription: "Pioneering the development of sustainable, high-strength biocomposite materials for various industrial applications. These materials offer a greener alternative to traditional composites, with comparable or superior performance, reduced weight, and improved environmental footprint. Our research focuses on bio-based resins and natural fibers, aiming for applications in construction, automotive, and consumer goods. This innovation contributes to a circular economy by utilizing renewable resources and enabling easier recycling.",
        tools: "Biopolymer Synthesis, Natural Fiber Composites, Material Testing, Additive Manufacturing",
        date: "Ongoing R&D: Est. Q4 2024",
        role: "Material Scientist Lead",
        githubLink: "https://github.com/lifewood/biocomposites-research",
        demoLink: null,
        tag: "Material Science",
        delay: 200
    },
    {
        id: 4,
        title: "LEED Platinum Office",
        image: "/assets/images/project_grid4.jpg",
        description: "Constructed a cutting-edge office building achieving LEED Platinum certification through integrated sustainable design.",
        fullDescription: "Constructed a cutting-edge office building achieving LEED Platinum certification through integrated sustainable design. This project exemplifies peak environmental performance, resource efficiency, and occupant well-being in commercial architecture. Features include a high-performance facade, rainwater harvesting, greywater recycling, rooftop solar array, smart HVAC systems, and extensive use of local, recycled, and low-VOC materials. It sets a new benchmark for green corporate spaces.",
        tools: "LEED Certification, Building Information Modeling (BIM), Smart HVAC, Water Recycling Systems",
        date: "Completed: Q2 2023",
        role: "Green Building Consultant",
        githubLink: null,
        demoLink: null,
        tag: "Green Building",
        delay: 0
    },
    {
        id: 5,
        title: "Smart Water Management",
        image: "/assets/images/project_grid5.jpg",
        description: "Implemented an IoT-based system for urban water conservation, real-time leakage detection, and efficient distribution.",
        fullDescription: "Implemented an IoT-based system for urban water conservation, real-time leakage detection, and efficient distribution. This smart infrastructure solution significantly reduces water waste and ensures sustainable water supply for growing urban populations. The system utilizes network sensors, predictive analytics, and automated control valves to identify and resolve issues promptly. It also integrates with public dashboards to promote water awareness and conservation among citizens.",
        tools: "IoT Sensors, Data Analytics, Predictive Modeling, SCADA Systems, GIS Mapping",
        date: "Launched: Q4 2022",
        role: "IoT Solutions Architect",
        githubLink: null,
        demoLink: "https://demo.lifewood.com/water-management",
        tag: "Smart Cities",
        delay: 100
    },
    {
        id: 6,
        title: "Circular Economy Initiative",
        image: "/assets/images/project_grid6.avif",
        description: "Developed a pilot facility for converting industrial waste into valuable resources, promoting a closed-loop economy.",
        fullDescription: "Developed a pilot facility for converting industrial waste into valuable resources, promoting a closed-loop economy. This project aims to minimize landfill waste and maximize resource utilization by transforming waste streams into new products or energy. The facility employs advanced recycling techniques, waste-to-energy conversion, and material recovery processes. It serves as a model for industrial symbiosis, fostering collaboration between industries to reduce their collective environmental impact.",
        tools: "Waste-to-Energy, Advanced Recycling, Material Recovery, Industrial Symbiosis Planning",
        date: "Pilot Phase: Q2 2024",
        role: "Circular Economy Strategist",
        githubLink: "https://github.com/lifewood/circular-economy-pilot",
        demoLink: null,
        tag: "Waste Management",
        delay: 200
    }
];

// Get unique categories for filtering
const projectCategories = ['All', ...new Set(projectData.map(project => project.tag))];

function ProjectsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('All'); // New state for filter
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 900); // Simulate 900ms loading
        return () => clearTimeout(timer);
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const filteredProjects = projectData.filter(project => {
        return filter === 'All' || project.tag === filter;
    });

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading Projects...</p>
            </div>
        );
    }

    return (
        <>
            <PageHero
                title="Our Visionary Projects."
                subtitle="Showcasing our commitment to innovative and sustainable solutions across various industries."
                videoSources={[
                    { src: "/assets/images/project_hero_section.mp4", type: "video/mp4" },
                    { src: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-urban-city-sunset-3096-large.webm", type: "video/webm" }
                ]}
                poster="https://via.placeholder.com/1600x600/133020/FFB347?text=About+Video+Fallback"
                className="projects-hero"
            />

            <section className="section-spacing container">
                <h2 className="text-center headline-01" data-aos="fade-up">Explore Our Impactful Creations</h2>
                <p className="subtitle-example text-center" data-aos="fade-up" data-aos-delay="100">From smart infrastructure to green energy, see how we're building a better future.</p>

                {/* New: Project Filter Section */}
                <div className="project-filter-buttons" data-aos="fade-up" data-aos-delay="200">
                    {projectCategories.map(category => (
                        <button
                            key={category}
                            className={`btn ${filter === category ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={openModal}
                        />
                    ))}
                </div>

                <div className="text-center" data-aos="fade-up">
                    <Link to="/contact" className="btn btn-primary">Contact Us to Discover More Projects</Link>
                </div>
            </section>

            {isModalOpen && selectedProject && (
                <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
            )}

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

export default ProjectsPage;