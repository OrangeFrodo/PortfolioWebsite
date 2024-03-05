import "../../App.css"

import HeroSection from "../pages/heroSection"
import Contact from "./contact"
import ListOfProjectsPage from "./listOfProjects"
import Skills from "./skills"

export default function Home() {
    return (
        <>
            <HeroSection />
            <Skills />
            <ListOfProjectsPage />
            <Contact />
        </>
    )
}