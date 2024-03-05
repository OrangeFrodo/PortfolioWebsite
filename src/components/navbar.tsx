import { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'


// Css
import "./navbar.css"

function Navbar() {
    // Click state
    const [clickState, setClickState] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => {
        setClickState(!clickState)
    }

    const closeMobileMenu = () => setClickState(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(false)
        }
    }

    const redirectToGitHub = () => {
        window.location.href = "https://github.com/OrangeFrodo";
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener("resize", showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='#'
                        className="navbar-logo">
                        PortWeb
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={clickState ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={clickState ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="#"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                smooth
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#skills"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                smooth
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#projects"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                smooth
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#contact"
                                className="nav-links"
                                onClick={closeMobileMenu}
                                smooth
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
