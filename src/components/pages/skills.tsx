import { motion } from "framer-motion";
import { useState } from "react";
import { ProgressBar } from '../progress-bar.component';
import PersonalSkills from './personalSkills';
import "./stylesPages.css";

export default function Skills() {
    const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'devops'>('frontend');

    // Stats cards data
    const stats = [
        { value: "2+", label: "Years Experience" },
        { value: "10+", label: "Projects Delivered" },
        { value: "20+", label: "Technologies" },
        { value: "100%", label: "Dedication" }
    ];

    // Frontend skills
    const frontendSkills = [
        { name: "React", bgcolor: "#61DAFB", completed: 72 },
        { name: "React Native", bgcolor: "#61DAFB", completed: 68 },
        { name: "JavaScript", bgcolor: "#F7DF1E", completed: 60 },
        { name: "TypeScript", bgcolor: "#3178C6", completed: 60 },
        { name: "Flutter", bgcolor: "#02569B", completed: 36 },
        { name: "Dart", bgcolor: "#0175C2", completed: 33 },
    ];

    // Backend skills
    const backendSkills = [
        { name: "Java", bgcolor: "#007396", completed: 56 },
        { name: "Kotlin", bgcolor: "#7F52FF", completed: 42 },
        { name: "C", bgcolor: "#A8B9CC", completed: 45 },
        { name: "SQL", bgcolor: "#4479A1", completed: 38 },
        { name: "Node.js", bgcolor: "#339933", completed: 30 },
        { name: "Express", bgcolor: "#000000", completed: 28 },
    ];

    // DevOps skills
    const devOpsSkills = [
        { name: "Kubernetes", bgcolor: "#326CE5", completed: 72 },
        { name: "Microk8s", bgcolor: "#E95420", completed: 70 },
        { name: "Minikube", bgcolor: "#326CE5", completed: 68 },
        { name: "Git", bgcolor: "#F05032", completed: 68 },
        { name: "Docker", bgcolor: "#2496ED", completed: 68 },
        { name: "Ansible", bgcolor: "#EE0000", completed: 66 },
        { name: "Vagrant", bgcolor: "#1868F2", completed: 64 },
        { name: "Argo CD", bgcolor: "#EF7B4D", completed: 60 },
        { name: "Traefik", bgcolor: "#24A1C1", completed: 59 },
        { name: "AWS", bgcolor: "#FF9900", completed: 55 },
        { name: "Azure", bgcolor: "#0078D4", completed: 50 },
    ];

    const personalSkills = [
        { name: "English", level: "C1" },
        { name: "Chinese", level: "HSK-2" },
        { name: "Adobe Photoshop", level: "Confident" },
        { name: "Adobe Illustrator", level: "Beginner" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100
            }
        }
    };

    const getCurrentSkills = () => {
        switch (activeTab) {
            case 'frontend': return frontendSkills;
            case 'backend': return backendSkills;
            case 'devops': return devOpsSkills;
            default: return frontendSkills;
        }
    };

    return (
        <section id='skills' className="skills">
            <div className="skills-main-container">
                {/* Header */}
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className='section-title'>My Skills & Expertise</h1>
                    <p className="section-subtitle">
                        A collection of technologies I've mastered over the years, constantly evolving with the industry.
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div 
                    className="stats-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className="stat-card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <h2 className="stat-value">{stat.value}</h2>
                            <p className="stat-label">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tab Buttons */}
                <motion.div 
                    className="skills-tabs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.button
                        className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`}
                        onClick={() => setActiveTab('frontend')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="tab-icon">💻</span>
                        Frontend
                    </motion.button>
                    <motion.button
                        className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`}
                        onClick={() => setActiveTab('backend')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="tab-icon">⚙️</span>
                        Backend
                    </motion.button>
                    <motion.button
                        className={`tab-button ${activeTab === 'devops' ? 'active' : ''}`}
                        onClick={() => setActiveTab('devops')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="tab-icon">🔧</span>
                        Tools & DevOps
                    </motion.button>
                </motion.div>

                {/* Skills Grid */}
                <motion.div 
                    className='skills-grid'
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {getCurrentSkills().map((item, idx) => (
                        <motion.div 
                            key={idx}
                            variants={itemVariants}
                        >
                            <ProgressBar 
                                name={item.name} 
                                bgcolor={item.bgcolor} 
                                completed={item.completed} 
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Note */}
                <motion.div
                    className="skills-note"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p>// I evaluated my skills on personal preferences, number of projects and overall confidence.</p>
                    <p>// Nevertheless, as you can see I prefer working in React and DevOps technologies.</p>
                </motion.div>

                {/* Personal Skills */}
                <div className="personal-skills-section">
                    <motion.h2 
                        className='personal-skills-title'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Additional Skills
                    </motion.h2>
                    
                    <motion.div 
                        className="personal-skills"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {personalSkills.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <PersonalSkills name={item.name} level={item.level} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
