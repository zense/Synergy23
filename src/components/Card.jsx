import "./Card.scss";
import rect from "../assets/rect55.png";

const Card = () => {
    return (
        <>
            <div className="card-main">
                <div className="cont">
                    <img className="cardimg" src={rect} alt="" />
                    <p>Cryptography</p>
                </div>
            </div>
        </>
    )
}

export default Card;