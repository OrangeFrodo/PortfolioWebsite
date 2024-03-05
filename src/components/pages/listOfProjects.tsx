import React, { useEffect, useRef, useState } from 'react';

import Card from 'react-bootstrap/Card'

import testPhoto from '../../images/phone.png'

// Css
import "./stylesPages.css"
import jsonData from '../content.json'

import gsap from 'gsap';

export default function ListOfProjectsPage() {

    // Set state for fridge
    const [nameOfProject, setProject] = useState(0)
    const [contentOfProject, setContentOfProject] = useState(jsonData.Fridge)

    // Animation state REF
    const boxRef = useRef(gsap) as unknown as React.MutableRefObject<HTMLInputElement>

    const listOfProjects = [
        { name: "Fridge" },
        { name: "Comics reader" },
        { name: "Android studio app" }
    ]

    const redirectToGitHub = () => {
        window.open(
            contentOfProject.link,
            '_blank' // <- This is what makes it open in a new window.
        );
    }

    // UseEffect
    useEffect(() => {
        gsap.to(boxRef.current, { x: 100 })
    })

    return (
        // Did put hero-container CSS -> if wrong need to create own css class name
        <section id='projects'>
            <div className="projects-container">
                <h1 className='projects-list-projects'>List of projects</h1>
                <div className='projects-items'>
                    <div className='projects-container-div-pos2'>
                        {/* List throught list of projects */}
                        {listOfProjects.map((item, idx) => (
                            // On click function, was not able to move it to separate function
                            <div className='project-set pointer'>
                                <a onClick={() => {
                                    // Set fridge
                                    if (idx === 0) {
                                        setContentOfProject(jsonData.Fridge)
                                    }
                                    // Set comic
                                    if (idx === 1) {
                                        setContentOfProject(jsonData.Comics)
                                    }
                                    if (idx === 2) {
                                        setContentOfProject(jsonData['Android Studio'])
                                    }
                                }
                                }><h1>{item.name}</h1></a>
                            </div>
                        ))}
                    </div>

                    {/* Card */}
                    <div
                        className='projects-card'
                        style={{ color: "white" }}
                    >
                        <Card className="bg-dark text-white phone-image" ref={boxRef}>
                            <Card.Img 
                                src={testPhoto} 
                                style={{
                                position: 'absolute',
                                textAlign: 'center',
                                width: 500,
                            }} />
                            <Card.Body style={{
                                padding: 100,
                                width: 250,
                            }}>
                                <Card.Title style={{
                                    fontSize: 25,
                                    paddingBottom: 25,
                                }}
                                >
                                    {contentOfProject.header}
                                </Card.Title>
                                <Card.Text>
                                    {contentOfProject.content}
                                </Card.Text>

                                <button
                                    style={{
                                        position: 'relative',
                                        zIndex: 10,
                                    }}
                                    onClick={(() => redirectToGitHub())}
                                >
                                    Github code
                                </button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section >
    );
}