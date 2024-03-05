import { Component } from 'react';

// Css
import "./stylesPages.css"

export class SvgOne extends Component {

    
    componentDidMount() {
        let path = document.querySelector('path')
        let pathLength = path?.getTotalLength()

        path!.style.strokeWidth = "1"
        path!.style.strokeOpacity = "40%"
        if (pathLength !== undefined) {
            path!.style.strokeDasharray = pathLength.toString()
        }

        window.addEventListener('scroll', () => {
            let scroolPerentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

            if (pathLength !== undefined) {
                let drawLength = pathLength * scroolPerentage;
                let tempVal = pathLength - drawLength
                path!.style.strokeDashoffset = tempVal.toString()
            }

        })

    }



    render() {
        return (
            <div className='line-container'>
                <svg className='svg-container' width="1338" viewBox="0 0 1338 1778" fill="none" preserveAspectRatio='xMidMax meet'>
                    <path d="M97.5034 0.5C170.17 74.8333 271.903 267.1 97.5034 441.5C-76.8966 615.9 24.8367 812.833 97.5034 889.5M97.5034 442.5C170.17 516.833 271.903 709.1 97.5034 883.5C-76.8966 1057.9 24.8367 1254.83 97.5034 1331.5M97.5017 889.5C170.168 963.833 271.902 1156.1 97.5017 1330.5C-76.8983 1504.9 24.8351 1701.83 97.5017 1778.5" stroke="white" />
                </svg>
            </div>

        );
    }
}

export default SvgOne;
