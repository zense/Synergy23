import { Row, Col } from "react-bootstrap";
import "./ResponsiveCards.scss";
import Card from "../components/Card";
const ResponsiveCards = (props) => {
    return (
        <Row>
            {props.cards.map((card) =>
                <div className="card-body col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center">
                    <Card img={card.img} content={card.content} />
                </div>
            )}
        </Row>
    )
}
export default ResponsiveCards;