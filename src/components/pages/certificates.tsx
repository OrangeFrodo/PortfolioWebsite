import { motion } from "framer-motion";
import "./stylesPages.css";

interface Certificate {
    name: string;
    issuer: string;
    date: string;
    description: string;
    link?: string;
}

export default function Certificates() {
    const certificates: Certificate[] = [
        {
            name: "Certificate Name 1",
            issuer: "Issuing Organization",
            date: "Month Year",
            description: "Brief description of what this certificate represents and skills validated.",
            link: "#"
        },
        {
            name: "Certificate Name 2",
            issuer: "Issuing Organization",
            date: "Month Year",
            description: "Brief description of what this certificate represents and skills validated.",
            link: "#"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <section id='certificates' className="certificates-section">
            <div className="certificates-container">
                <motion.h1 
                    className='section-title'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Certificates & Achievements
                </motion.h1>
                
                <motion.div 
                    className="certificates-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {certificates.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            className="certificate-card"
                            variants={cardVariants}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(101, 83, 255, 0.3)"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="certificate-badge">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                                          fill="url(#gradient)" stroke="#6553FF" strokeWidth="1"/>
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#6553FF" />
                                            <stop offset="100%" stopColor="#8B7FFF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            
                            <h3 className="certificate-name">{cert.name}</h3>
                            <p className="certificate-issuer">{cert.issuer}</p>
                            <p className="certificate-date">{cert.date}</p>
                            <p className="certificate-description">{cert.description}</p>
                            
                            {cert.link && (
                                <motion.a 
                                    href={cert.link}
                                    className="certificate-link"
                                    whileHover={{ x: 5 }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Certificate →
                                </motion.a>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
