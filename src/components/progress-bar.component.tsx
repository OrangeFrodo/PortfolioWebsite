import React from "react";

export const ProgressBar = (props: { name: any; bgcolor: any; completed: any; }) => {
    const { name, bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: '250%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 10,
        marginTop: 0,
        marginBottom: 20,
        flexShrink: 0,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
    }

    const labelStyles = {
        padding: 30,
        color: 'white',
        display: "inline"
    }

    const headline = {
        color: "white",
        width: 150,
        flexShrink: 0,
        margin: 0,
        paddind: 0,
        paddingBottom: 10,
    }

    return (
        <div className="programming-skills" style={{display: "flex", marginRight: 550}}>
            <p style={headline}>{name}</p>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{/*`${completed}%`*/}</span>
                </div>
            </div>
        </div>
    );
};

