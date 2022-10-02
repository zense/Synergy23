import "./Speakers.scss"
import Card from './Card';
import { BsArrowLeftCircle } from "react-icons/bs"
import { BsArrowRightCircle } from "react-icons/bs"
import speakersLst from "../content/speakers";
import { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import {isDesktop} from "react-device-detect";
const Speakers = (props) => {
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true);

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable(true);
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };
    return (
        <>
            <div className="wrapper">
                <Container className="top">
                    <div className="headings">
                        <h1 className="speakerHeading">{props.title}<span className="dot_color">.</span></h1>
                        <h2>{props.subtitle}</h2>
                    </div>
                    {isDesktop && 
                        <div className="icons">
                            <BsArrowLeftCircle className="icon" onClick={() => {
                                handleHorizantalScroll(elementRef.current, 25, 100, -10);
                            }}
                                disabled={arrowDisable} />
                            <BsArrowRightCircle className="icon" onClick={() => {
                                handleHorizantalScroll(elementRef.current, 25, 100, 10);
                            }} />
                        </div>
                    }
                </Container>
                <Container className="cards" ref={elementRef}>
                    {speakersLst.map((speaker) => {
                        return (
                            <Card />
                        )
                    })}
                </Container>
            </div>
        </>
    )
}

export default Speakers;