import { motion } from "framer-motion";
import { ProgressBar } from '../progress-bar.component';
import PersonalSkills from './personalSkills';
import "./stylesPages.css";

export default function Skills() {
    const testData = [
        { name: "React", bgcolor: "#6553FF", completed: 72 },
        { name: "React Native", bgcolor: "#6553FF", completed: 68 },
        { name: "JavaScript", bgcolor: "#6553FF", completed: 60 },
        { name: "TypeScript", bgcolor: "#6553FF", completed: 60 },
        { name: "Java", bgcolor: "#6553FF", completed: 56 },
        { name: "C", bgcolor: "#6553FF", completed: 45 },
        { name: "Kotlin", bgcolor: "#6553FF", completed: 42 },
        { name: "SQL", bgcolor: "#6553FF", completed: 38 },
        { name: "Flutter", bgcolor: "#6553FF", completed: 36 },
        { name: "Dart", bgcolor: "#6553FF", completed: 33 },
    ];

    const devOpsSkills = [
        { name: "Kubernetes", bgcolor: "#6553FF", completed: 72 },
        { name: "Microk8s", bgcolor: "#6553FF", completed: 70 },
        { name: "Minikube", bgcolor: "#6553FF", completed: 68 },
        { name: "Docker", bgcolor: "#6553FF", completed: 68 },
        { name: "Ansible", bgcolor: "#6553FF", completed: 66 },
        { name: "Vagrant", bgcolor: "#6553FF", completed: 64 },
        { name: "Argo CD", bgcolor: "#6553FF", completed: 60 },
        { name: "Traefik", bgcolor: "#6553FF", completed: 59 },
    ];

    const personalSkills = [
        { name: "English", level: "C1" },
        { name: "Chinese", level: "A2" },
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

    return (
        <section id='skills' className="skills">
            {/* Programming Skills */}
            <div className="skills-container-v1">
                <motion.h1 
                    className='section-title'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Programming Skills
                </motion.h1>
                
                <motion.div 
                    className='skills-list' 
                    style={{ marginTop: 30 }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {testData.map((item, idx) => (
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
            </div>

            {/* DevOps Skills */}
            <div className="skills-container-v1">
                <motion.h1 
                    className='section-title'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    DevOps Skills
                </motion.h1>
                
                <motion.div 
                    className='skills-list' 
                    style={{ marginTop: 30 }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {devOpsSkills.map((item, idx) => (
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
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p style={{ color: "#808080", margin: 0, marginTop: 20 }}>
                        // I evaluated my skills on personal preferences, number of projects and overall confidence.
                    </p>
                    <p style={{ color: "#808080", margin: 0 }}>
                        // Nevertheless, as you can see I prefer working in React.
                    </p>
                </motion.div>
            </div>

            {/* Personal Skills */}
            <div className="skills-container-v2">
                <motion.h1 
                    className='section-title'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Personal Skills
                </motion.h1>
                
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
        </section>
    );
}
