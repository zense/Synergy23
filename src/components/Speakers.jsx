import "./Speakers.scss"
import Card from './Card';
import { BsArrowLeftCircle } from "react-icons/bs"
import { BsArrowRightCircle } from "react-icons/bs"
import speakersLst from "../content/speakers";
import { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";


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
            <div className="top">
                <div className="headings">
                    <h1>{props.title}</h1>
                    <   h2>{props.subtitle}</h2>
                </div>
                <div className="icons">
                    <BsArrowLeftCircle className="icon" onClick={() => {
                        handleHorizantalScroll(elementRef.current, 25, 100, -10);
                    }}
                        disabled={arrowDisable} />
                    <BsArrowRightCircle className="icon" onClick={() => {
                        handleHorizantalScroll(elementRef.current, 25, 100, 10);
                    }} />
                </div>
            </div>
            <Container className="cards" ref={elementRef}>
                {speakersLst.map((speaker) => {
                    return (
                        <Card />
                    )
                })}
            </Container>
        </>
    )
}

export default Speakers;