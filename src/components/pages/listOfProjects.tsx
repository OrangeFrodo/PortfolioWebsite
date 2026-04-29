import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./stylesPages.css";

interface Project {
    id: number;
    title: string;
    description: string;
    // image: string;
    category: string;
    tags: string[];
    codeLink: string;
    demoLink?: string;
    featured?: boolean;
}

export default function ListOfProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<string>('All');

    // Project data - easily add more projects here
    const projects: Project[] = [
        {
            id: 1,
            title: "Fridge Management App",
            description: "A comprehensive app to track food items, expiration dates, and generate shopping lists. Built with React Native for cross-platform functionality.",
            //image: "/images/fridge-app.jpg",
            category: "Mobile",
            tags: ["React Native", "JavaScript", "SQLite"],
            codeLink: "https://github.com/OrangeFrodo/fridge-app",
            demoLink: "#",
            featured: true
        },
        {
            id: 2,
            title: "Comics Reader",
            description: "A sleek comic book reader application with smooth page transitions, bookmark functionality, and library management.",
            //image: "/images/comics-reader.jpg",
            category: "Web App",
            tags: ["React", "TypeScript", "Node.js"],
            codeLink: "https://github.com/OrangeFrodo/comics-reader",
            demoLink: "#"
        },
        {
            id: 3,
            title: "Android Studio Project",
            description: "Native Android application showcasing modern Android development practices with Kotlin and Jetpack Compose.",
            //image: "/images/android-app.jpg",
            category: "Mobile",
            tags: ["Kotlin", "Android", "Jetpack Compose"],
            codeLink: "https://github.com/OrangeFrodo/android-project",
            featured: true
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "This very portfolio! A modern, animated website built with React, TypeScript, and Framer Motion.",
            //image: "/images/portfolio.jpg",
            category: "Web App",
            tags: ["React", "TypeScript", "Framer Motion"],
            codeLink: "https://github.com/OrangeFrodo/portfolio",
            demoLink: "#"
        }
    ];

    const categories = ['All', 'Web App', 'Mobile', 'Data'];

    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeFilter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100
            }
        }
    };

    return (
        <section id='projects'>
            <div className="projects-section-container">
                {/* Header */}
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className='section-title'>Featured Projects</h1>
                    <p className="section-subtitle">
                        A selection of projects that showcase my skills in building scalable, user-friendly applications.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div 
                    className="project-filters"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    className='projects-grid'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeFilter}
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="project-card-new"
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                layout
                            >
                                {/* Project Image */}
                                <div className="project-image-container">
                                    {/* <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="project-image"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://via.placeholder.com/600x400/12182b/FF9800?text=' + encodeURIComponent(project.title);
                                        }}
                                    /> */}
                                    <div className="project-overlay">
                                        <div className="project-badges">
                                            {project.category && (
                                                <span className="category-badge">{project.category}</span>
                                            )}
                                            {project.featured && (
                                                <span className="featured-badge">⭐ Featured</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="project-content">
                                    <h3 className="project-title-new">{project.title}</h3>
                                    <p className="project-description-new">{project.description}</p>

                                    {/* Technology Tags */}
                                    <div className="project-tags">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="project-tag">{tag}</span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="project-actions">
                                        <motion.a
                                            href={project.codeLink}
                                            className="project-button button-outline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="button-icon">💻</span>
                                            Code
                                        </motion.a>
                                        {project.demoLink && (
                                            <motion.a
                                                href={project.demoLink}
                                                className="project-button button-primary"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <span className="button-icon">🚀</span>
                                                Live Demo
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Show message if no projects */}
                {filteredProjects.length === 0 && (
                    <motion.div 
                        className="no-projects"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p>No projects in this category yet.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
