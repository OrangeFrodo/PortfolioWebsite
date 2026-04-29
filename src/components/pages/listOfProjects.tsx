import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from 'react-bootstrap/Card';
import testPhoto from '../../images/phone.png';
import "./stylesPages.css";
import jsonData from '../content.json';

export default function ListOfProjectsPage() {
    const [contentOfProject, setContentOfProject] = useState(jsonData.Fridge);
    const [activeProject, setActiveProject] = useState(0);

    const listOfProjects = [
        { name: "Fridge" },
        { name: "Comics reader" },
        { name: "Android studio app" }
    ];

    const redirectToGitHub = () => {
        window.open(contentOfProject.link, '_blank');
    };

    const handleProjectClick = (idx: number) => {
        setActiveProject(idx);
        if (idx === 0) setContentOfProject(jsonData.Fridge);
        if (idx === 1) setContentOfProject(jsonData.Comics);
        if (idx === 2) setContentOfProject(jsonData['Android Studio']);
    };

    const projectVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.1,
                type: "spring" as const,
                stiffness: 100
            }
        })
    };

    const cardVariants = {
        initial: { opacity: 0, scale: 0.8, rotateY: -90 },
        animate: { 
            opacity: 1, 
            scale: 1, 
            rotateY: 0,
            transition: {
                type: "spring" as const,
                damping: 15,
                stiffness: 100
            }
        },
        exit: { 
            opacity: 0, 
            scale: 0.8, 
            rotateY: 90,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id='projects'>
            <div className="projects-container">
                <motion.h1 
                    className='section-title projects-list-projects'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    List of Projects
                </motion.h1>
                
                <div className='projects-items'>
                    <motion.div 
                        className='projects-container-div-pos2'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {listOfProjects.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                className={`project-set pointer ${activeProject === idx ? 'active-project' : ''}`}
                                variants={projectVariants}
                                custom={idx}
                                whileHover={{ 
                                    scale: 1.05,
                                    x: -10,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.a 
                                    onClick={() => handleProjectClick(idx)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h1>{item.name}</h1>
                                    <motion.div 
                                        className="project-underline"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: activeProject === idx ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Card with AnimatePresence for smooth transitions */}
                    <div className='projects-card'>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={contentOfProject.header}
                                variants={cardVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <Card className="bg-dark text-white phone-image project-card-enhanced">
                                    <motion.img 
                                        src={testPhoto}
                                        className="project-card-image"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring" }}
                                    />
                                    <Card.Body className="project-card-body">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <Card.Title className="project-card-title">
                                                {contentOfProject.header}
                                            </Card.Title>
                                            <Card.Text className="project-card-text">
                                                {contentOfProject.content}
                                            </Card.Text>

                                            <motion.button
                                                className="github-button"
                                                onClick={redirectToGitHub}
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    boxShadow: "0 5px 15px rgba(101, 83, 255, 0.4)"
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <span>View on GitHub</span>
                                                <motion.span
                                                    className="arrow-icon"
                                                    initial={{ x: 0 }}
                                                    whileHover={{ x: 5 }}
                                                >
                                                    →
                                                </motion.span>
                                            </motion.button>
                                        </motion.div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
