import React, { Component } from 'react';

// Css
import "./stylesPages.css"

export class SvgTwo extends Component {


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
                <svg width="1338" viewBox="0 0 1338 1978" fill="none" preserveAspectRatio='xMidMax meet'>
                    <path d="M216.5 74C201.5 424.333 144.1 1051.3 34.5 756.5C-75.1 461.7 110.167 746.667 216.5 926M216.5 38C206.616 268.839 178.324 619.781 128.82 747.995M128.82 747.995C103.194 814.366 71.8833 821.053 34.5 720.5C-48.007 498.574 36.5897 605.208 128.82 747.995ZM128.82 747.995C159.106 794.883 190.215 845.669 216.5 890M216.5 120C206.616 350.839 178.324 701.781 128.82 829.995M128.82 829.995C103.194 896.366 71.8833 903.053 34.5 802.5C-48.007 580.574 36.5897 687.208 128.82 829.995ZM128.82 829.995C159.106 876.883 190.215 927.669 216.5 972M216.5 1C206.616 231.839 178.324 582.781 128.82 710.995M128.82 710.995C103.194 777.366 71.8833 784.053 34.5 683.5C-48.007 461.574 36.5897 568.208 128.82 710.995ZM128.82 710.995C159.106 757.883 190.215 808.669 216.5 853" stroke="white" />
                </svg>
            </div>

        );
    }
}

export default SvgTwo;
