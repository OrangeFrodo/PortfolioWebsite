import React from "react";
import { motion } from "framer-motion";

export const ProgressBar = (props: { name: any; bgcolor: any; completed: any; }) => {
    const { name, bgcolor, completed } = props;

    const containerStyles: React.CSSProperties = {
        height: 20,
        width: '100%',
        backgroundColor: "rgba(224, 224, 222, 0.1)",
        borderRadius: 50,
        margin: 10,
        marginTop: 0,
        marginBottom: 20,
        flexShrink: 0,
        overflow: 'hidden',
        border: '1px solid rgba(101, 83, 255, 0.2)'
    };

    const fillerStyles: React.CSSProperties = {
        height: '100%',
        borderRadius: 'inherit',
        background: `linear-gradient(90deg, ${bgcolor}, #8B7FFF)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: '10px'
    };

    const labelStyles: React.CSSProperties = {
        color: 'white',
        fontSize: '0.75rem',
        fontWeight: 600
    };

    const headline: React.CSSProperties = {
        color: "white",
        width: 180,
        flexShrink: 0,
        margin: 0,
        padding: 0,
        paddingBottom: 10,
        fontSize: '1.1rem',
        fontWeight: 500
    };

    return (
        <div className="programming-skills" style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <p style={headline}>{name}</p>
            <div style={containerStyles}>
                <motion.div
                    style={fillerStyles}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${completed}%` }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.1
                    }}
                >
                    <motion.span
                        style={labelStyles}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        {completed}%
                    </motion.span>
                </motion.div>
            </div>
        </div>
    );
};
