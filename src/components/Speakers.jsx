import "./Speakers.scss"
import Card from './Card';
import {BsArrowLeftCircle} from "react-icons/bs"
import {BsArrowRightCircle} from "react-icons/bs"

const Speakers = (props) => {
    return (
        <>
            <div className="top">
                <div className="headings">
                    <h1>{props.title}</h1>
                <   h2>{props.subtitle}</h2>
                </div>
                <div className="icons">
                    <BsArrowLeftCircle className="icon"></BsArrowLeftCircle>
                    <BsArrowRightCircle className="icon"></BsArrowRightCircle>
                </div>
            </div>
            <div className="cards">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </div>
        </>
    )
}

export default Speakers;