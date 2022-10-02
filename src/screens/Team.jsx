import Title_Jumbotron from "../components/Title_Jumbotron";
import { team_page_subtitle } from '../content/subtitle_texts';
import "./Team.scss";
import { Container, Row, Col } from "react-bootstrap";
import ResponsiveCards from "./ResponsiveCards";
import { teams } from "../content/teams";
const Teams = () => {
    return (
        <div className="Teams">
            <Title_Jumbotron bigHeader={"Meet the people who made it"} bigHeaderCaps={"ALL"} subtitle={team_page_subtitle} />
            {teams.map((team) =>
                <Container className="wrapper">
                    <h1 className="wrapper__heading">{team.group}<span className="dot_color">.</span></h1>
                    <ResponsiveCards cards={team.list} />
                </Container>
            )}
        </div >
    );
}
export default Teams;