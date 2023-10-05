import Title_Jumbotron from "../components/Title_Jumbotron";
import { team_page_subtitle } from '../content/subtitle_texts';
import "./Team.scss";
import { Container, Row, Col } from "react-bootstrap";
import ResponsiveCards from "./ResponsiveCards";
import { teams } from "../content/teams";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import m1 from "../assets/m1.png"
import m2 from "../assets/m2.png"
import m3 from "../assets/m3.png"
import m4 from "../assets/m4.png"
import Card from "../components/Card";

const Teams = () => {
    return (
        <div className="Teams">
            <Title_Jumbotron bigHeader={"Meet the people who made it"} bigHeaderCaps={"ALL"} subtitle={team_page_subtitle} />
                <Container className="wrapper">
                    <h1 className="wrapper__heading">{teams[0].group}<span className="dot_color">.</span></h1>
                    <Row>
                        <div className="card-body col-sm-6 col-md-4 col-lg-3 gap-5 col-xl-2 d-flex justify-content-center">
                            <Card img={image1} content={teams[0].list[0].content} />
                            <Card img={image2} content={teams[0].list[1].content} />
                            <Card img={image3} content={teams[0].list[2].content} />
                        </div>
                    </Row>
                </Container>
                <Container className="wrapper">
                    <h1 className="wrapper__heading">{teams[1].group}<span className="dot_color">.</span></h1>
                    <Row>
                        <div className="card-body col-sm-6 col-md-4 col-lg-3 gap-5 col-xl-2 d-flex justify-content-center">
                            <Card img={m1} content={teams[1].list[0].content} />
                            <Card img={m2} content={teams[1].list[1].content} />
                            <Card img={m3} content={teams[1].list[2].content} />
                            <Card img={m4} content={teams[1].list[3].content} />
                        </div>
                    </Row>
                </Container>
        </div >
    );
}
export default Teams;