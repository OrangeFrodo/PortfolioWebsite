import { motion } from "framer-motion";
import "./stylesPages.css";

export default function Contact() {
    const contactItems = [
        {
            icon: "📧",
            label: "Email",
            value: "daxoja@gmail.com",
            link: "mailto:daxoja@gmail.com"
        },
        {
            icon: "💻",
            label: "GitHub",
            value: "OrangeFrodo",
            link: "https://github.com/OrangeFrodo"
        }
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
        <section id='contact'>
            <div className='contact-container'>
                <motion.h1 
                    className='section-title'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.h1>

                <motion.p 
                    className="contact-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    Feel free to reach out for opportunities or just to say hi!
                </motion.p>

                <motion.div 
                    className="contact-items"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {contactItems.map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.link}
                            className="contact-card"
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                y: -10,
                                boxShadow: "0 20px 40px rgba(101, 83, 255, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div 
                                className="contact-icon"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                {item.icon}
                            </motion.div>
                            <div className="contact-info">
                                <p className="contact-label">{item.label}</p>
                                <p className="contact-value">{item.value}</p>
                            </div>
                            <motion.div 
                                className="contact-arrow"
                                initial={{ x: 0 }}
                                whileHover={{ x: 5 }}
                            >
                                →
                            </motion.div>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div 
                    className="contact-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <p>// Let's build something amazing together</p>
                </motion.div>
            </div>
        </section>
    );
}
