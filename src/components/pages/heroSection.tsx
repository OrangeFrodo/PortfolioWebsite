// Css
import "./stylesPages.css"
import "../../App.css"

function HeroSection() {
    return (
        <section id='/'>
            <div className="hero-container">
                <video src='./video/video-2.mp4' />
                <div className='hero-container-div-pos1'>
                    <div>
                        <h1 className='hero-container-h1-pos3'> // I am a Developer</h1>
                        <h2 className="hero-container-h1-pos1">developerName = </h2>
                        <h2 className="hero-container-h1-pos2">"Jakub Daxner"</h2>
                    </div>
                    <div>
                        <h1 className='hero-container-h1-pos3'> // I am a student, who is looking for experience</h1>
                        <h2 className="hero-container-h1-pos1">currentPosition = </h2>
                        <h2 className="hero-container-h1-pos2">"unemployed"</h2>
                    </div>
                    <div>
                        <h1 className='hero-container-h1-pos3'> // Current list of hobbies</h1>
                        <h2 className="hero-container-h1-pos1">hobbies = </h2>
                        <h2 className="hero-container-h1-pos2">["Gym", "Movies", "Books", "Philosophy"]</h2>
                    </div>
                </div>
                <div>
                    {/*
                <Button
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                    type={null}
                    onClick={null}
                >
                    GET HERE
                </Button>
                <Button
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    type={null}
                    onClick={null}
                >
                    EEEEJ
                </Button>
                */}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
