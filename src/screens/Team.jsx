import Title_Jumbotron from "../components/Title_Jumbotron";
import { team_page_subtitle } from '../content/subtitle_texts';
import "./Team.scss";
const Teams = () => {
    return (
        <>
            <Title_Jumbotron bigHeader={"Meet the people who made it"} bigHeaderCaps={"ALL"} subtitle={team_page_subtitle} />
        </>
    );
}
export default Teams;