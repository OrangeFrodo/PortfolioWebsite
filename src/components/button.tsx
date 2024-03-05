// Button component
import "./button.css"

import { Link } from 'react-router-dom'

const STYLES = ["btn--primary", "btn--outline"]
const SIZES = ["btn--medium", "btn--large"]

interface IProps {
    children: any;
    type: any;
    onClick:  any;
    buttonStyle : any;
    buttonSize : any;
}

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
} : IProps) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to="/services" className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
} 