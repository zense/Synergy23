import Title_Jumbotron from "../components/Title_Jumbotron";
import { events_page_subtitle } from '../content/subtitle_texts';
import EventCard from "../components/event_card";
import './Events.scss'

function Events(){
    return (
    <div className="Events">
         <Title_Jumbotron bigHeader={"Discover"} bigHeaderCaps={"Synergy"} subtitle= {events_page_subtitle}/>
         <EventCard title = "Event Name" qid = "1" ansid="1a"/>
         <EventCard title = "Another event" qid = '2' ansid="2a"/>
    </div>
    );  
}
export default Events;