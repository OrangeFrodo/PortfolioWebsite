import React from 'react';

export default function PersonalSkills(props: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; level: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {

    const divStyle = {
        display: "inline",
    }

    const nameStyle = {
        color: "white",
    }

    const levelStyle = {
        color: "#6553FF",
    }

    return (
        <div className='ps'>
            <h1 style={nameStyle}>
                {props.name}
            </h1>
            <h2 style={levelStyle}>
                {props.level}
            </h2>
        </div>
    );
}
