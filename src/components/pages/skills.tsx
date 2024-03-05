import { ProgressBar } from '../progress-bar.component';
import PersonalSkills from './personalSkills';

// Css
import "./stylesPages.css"

export default function Skills() {

    // Map througout every item in list
    const testData = [
        { name: "React", bgcolor: "#6553FF", completed: 72 },       // React
        { name: "React Native", bgcolor: "#6553FF", completed: 68 },   // React Native
        { name: "Java Script", bgcolor: "#6553FF", completed: 60 },   // Java Script
        { name: "Type Script", bgcolor: "#6553FF", completed: 60 },   // Type Script
        { name: "Java", bgcolor: "#6553FF", completed: 56 },        // Java
        { name: "C", bgcolor: "#6553FF", completed: 45 },           // C
        { name: "Kotlin", bgcolor: "#6553FF", completed: 42 },      // Kotlin
        { name: "SQL", bgcolor: "#6553FF", completed: 38 },         // SQL
        { name: "Flutter", bgcolor: "#6553FF", completed: 36 },     // Flutter
        { name: "Dart", bgcolor: "#6553FF", completed: 33 },        // Dart
    ];

    const personalSkills = [
        { name: "English", level: "C1" },
        { name: "Chinese", level: "A2" },
        { name: "Adobe Photoshop", level: "Confident" },
        { name: "Adobe Ilustrator", level: "Beginner" },
    ]

    return (
        // Did put hero-container CSS -> if wrong need to create own css class name
        <section id='skills' className="skills">
            <div className="skills-container-v1" >
                <h1 className='skills-container-h1-pos1'>Programming skills</h1>
                <div className='skills-list' style={{ marginTop: 30 }}>
                    {testData.map((item, idx) => (
                        <><ProgressBar name={item.name} key={idx} bgcolor={item.bgcolor} completed={item.completed} /> </>
                    ))}
                </div>
                <div>
                    <p style={{ color: "#808080", margin: 0, marginTop: 20 }}>// I evaluated my skills on personal preferences, number of projects and overall confidence.</p>
                    <p style={{ color: "#808080", margin: 0 }}>// Nevertheless, as you can see I prefere working in React.</p>
                </div>
            </div>
            <div className="skills-container-v2">
                <h1 className='skills-container-h1-pos1' >Personal skills</h1>
                <div className="personal-skills">
                    {personalSkills.map((item, idx) => (
                        <PersonalSkills key={idx} name={item.name} level={item.level} />
                    ))}
                </div>
            </div>

        </section>
    );
}

