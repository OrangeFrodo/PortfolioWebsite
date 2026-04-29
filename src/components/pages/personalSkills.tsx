import React from 'react';

export default function PersonalSkills(props: { name: string; level: string }) {
    const cardStyle: React.CSSProperties = {
        background: 'rgba(20, 20, 20, 0.6)',
        border: '1px solid rgba(101, 83, 255, 0.3)',
        borderRadius: '12px',
        padding: '1.5rem',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)'
    };

    const nameStyle: React.CSSProperties = {
        color: "white",
        fontSize: '1.3rem',
        margin: '0 0 0.5rem 0',
        fontWeight: 600
    };

    const levelStyle: React.CSSProperties = {
        color: "#6553FF",
        fontSize: '1rem',
        margin: 0,
        fontWeight: 500
    };

    return (
        <div className='ps personal-skill-card' style={cardStyle}>
            <h3 style={nameStyle}>
                {props.name}
            </h3>
            <p style={levelStyle}>
                {props.level}
            </p>
        </div>
    );
}
