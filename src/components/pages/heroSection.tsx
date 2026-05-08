import { motion } from "framer-motion";
import "./stylesPages.css";
import "../../App.css";

function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring" as const,
                damping: 12
            }
        }
    };

    const codeBlockVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2,
                type: "spring" as const
            }
        })
    };

    return (
        <section id='/'>
            <div className="hero-container">
                <video src='./video/video-2.mp4' autoPlay loop muted />
                
                <motion.div 
                    className='hero-container-div-pos1'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="code-block"
                        variants={codeBlockVariants}
                        custom={0}
                    >
                        <motion.h1 
                            className='hero-container-h1-pos3'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            // I am a Developer
                        </motion.h1>
                        <div className="code-line">
                            <motion.h2 
                                className="hero-container-h1-pos1"
                                variants={itemVariants}
                            >
                                developerName = 
                            </motion.h2>
                            <motion.h2 
                                className="hero-container-h1-pos2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                            >
                                "Jakub Daxner"
                            </motion.h2>
                        </div>
                    </motion.div>

                    <motion.div
                        className="code-block"
                        variants={codeBlockVariants}
                        custom={1}
                    >
                        <motion.h1 
                            className='hero-container-h1-pos3'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1 }}
                        >
                            // I am a student, who is looking for experience
                        </motion.h1>
                        <div className="code-line">
                            <motion.h2 
                                className="hero-container-h1-pos1"
                                variants={itemVariants}
                            >
                                currentPosition = 
                            </motion.h2>
                            <motion.h2 
                                className="hero-container-h1-pos2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.5, type: "spring" }}
                            >
                                "Operations Engineer"
                            </motion.h2>
                        </div>
                    </motion.div>

                    <motion.div
                        className="code-block"
                        variants={codeBlockVariants}
                        custom={2}
                    >
                        <motion.h1 
                            className='hero-container-h1-pos3'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.9, duration: 1 }}
                        >
                            // Current list of hobbies
                        </motion.h1>
                        <div className="code-line">
                            <motion.h2 
                                className="hero-container-h1-pos1"
                                variants={itemVariants}
                            >
                                hobbies = 
                            </motion.h2>
                            <motion.h2 
                                className="hero-container-h1-pos2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2.2, type: "spring" }}
                            >
                                ["Gym", "Movies", "Books", "Philosophy"]
                            </motion.h2>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div 
                    className="scroll-indicator"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        delay: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1.5
                    }}
                >
                    <div className="scroll-arrow">↓</div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
