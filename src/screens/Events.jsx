import Title_Jumbotron from "../components/Title_Jumbotron";
import { events_page_subtitle } from '../content/subtitle_texts';
import EventCard from "../components/event_card";
import './Events.scss'

function Events(){
    return (
    <div className="Events">
         <Title_Jumbotron bigHeader={"Discover"} bigHeaderCaps={"Synergy"} subtitle= {events_page_subtitle} />
         <EventCard title = "Lens Flare" qid = "1" ansid="1a" description1={"🎬Calling all aspiring filmmakers! It's time to bring your storytelling skills to life through Lens Flare, Synergy's short film competition. The pages of time turn, revealing stories untold. Dive into the theme 'The Metamorphosis of Time' and unleash your creativity to shape the past, present, and future.🎥"}/>
         {/* <EventCard title = "Another event" qid = '2' ansid="2a"/> */}
         <h1 className="temp_events">Excitement alert : More events are en route !</h1>
    </div>
    );  
}
export default Events;
