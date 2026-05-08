import { motion } from "framer-motion";
import "./stylesPages.css";
import { FaAws } from 'react-icons/fa';
import { SiMicrosoftazure } from 'react-icons/si';

interface Certificate {
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
    description: string;
    tags: string[];
    link?: string;
    icon: 'aws' | 'azure';
    color: string;
}

export default function Certificates() {
    const certificates: Certificate[] = [
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "March 2025",
            credentialId: "ID: AWS-CCP-2025",
            description: "Foundational understanding of AWS Cloud, services, and terminology.",
            tags: ["Cloud", "AWS", "Infrastructure"],
            link: "https://www.credly.com/badges/a65d69c8-22e4-4484-bd3f-ab5f473f4a6a/linked_in_profile",
            icon: 'aws',
            color: '#FF9900'
        },
        {
            name: "Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft",
            date: "May 2025",
            credentialId: "ID: F9F3EFE74C510407",
            description: "Foundational knowledge of cloud services and how they are provided with Microsoft Azure.",
            tags: ["Cloud", "Azure", "Microsoft"],
            link: "https://learn.microsoft.com/en-us/users/jakubdaxner-8362/credentials/f9f3efe74c510407?ref=https%3A%2F%2Fwww.linkedin.com%2F",
            icon: 'azure',
            color: '#0078D4'
        }
    ];

    const stats = [
        { label: "Certifications", value: "2" },
        { label: "Organizations", value: "2" },
        { label: "Latest Year", value: "2025" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 30
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const getIcon = (iconType: 'aws' | 'azure') => {
        switch(iconType) {
            case 'aws':
                return <FaAws size={40} />;
            case 'azure':
                return <SiMicrosoftazure size={40} />;
        }
    };

    return (
        <section id='certificates' className="certificates-section">
            <div className="certificates-container">
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-eyebrow">ACHIEVEMENTS</p>
                    <h1 className='section-title'>Certifications</h1>
                    <p className="section-subtitle">
                        Industry-recognized certifications that validate my expertise across various domains of cloud computing.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div 
                    className="certs-stats-grid stats-grid"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className="stat-card"
                            whileHover={{ y: -5 }}
                        >
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
                
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
                            whileHover={{ y: -8 }}
                            style={{ borderTopColor: cert.color }}
                        >
                            <div className="cert-card-header">
                                <div className="cert-icon" style={{ color: cert.color }}>
                                    {getIcon(cert.icon)}
                                </div>
                                <motion.a 
                                    href={cert.link}
                                    className="cert-verify-link"
                                    whileHover={{ scale: 1.1 }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Verify Credential"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15 3h6v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 14L21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </motion.a>
                            </div>

                            <h3 className="certificate-name">{cert.name}</h3>
                            <p className="certificate-issuer" style={{ color: cert.color }}>
                                📋 {cert.issuer}
                            </p>
                            
                            <div className="cert-meta">
                                <span className="cert-date">📅 {cert.date}</span>
                                <span className="cert-id">{cert.credentialId}</span>
                            </div>

                            <div className="cert-tags">
                                {cert.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="cert-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="cert-footer">
                                <span className="verified-badge">Verified Credential</span>
                                <motion.a
                                    href={cert.link}
                                    className="verify-link-text"
                                    whileHover={{ x: 3 }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Verify →
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
