import Title_Jumbotron from "../components/Title_Jumbotron";
import { events_page_subtitle } from '../content/subtitle_texts';
import EventCard from "../components/event_card";
import './Events.scss'
import lensflare from "../assets/lensflare.png"

function Events() {
    return (
        <div className="Events">
            <Title_Jumbotron bigHeader={"Discover"} bigHeaderCaps={"Synergy"} subtitle={events_page_subtitle} />
            <EventCard
            title="Lens Flare"
            description1={"🎬Calling all aspiring filmmakers! It's time to bring your storytelling skills to life through Lens Flare, Synergy's short film competition. The pages of time turn, revealing stories untold. Dive into the theme 'The Metamorphosis of Time' and unleash your creativity to shape the past, present, and future.🎥"} 
            image={lensflare}
            details={"https://iiitbac-my.sharepoint.com/:b:/g/personal/synergy_iiitb_ac_in/Ea5FWwrd4u1MvqB2XHkr6zcBnflgZbikeUXe8kRi8H_VbA?e=MRTaCf"}
            register={"https://docs.google.com/forms/d/e/1FAIpQLSfTktPQMk3OiHmR-PaO74yFyDo5LokL2HEQB1L8LygWkRHIAg/viewform"}
            submit={"https://docs.google.com/forms/d/e/1FAIpQLScH-clXkyoGdMIlHYsp9OG3JahL-hhRa6JZV1PwrsIgB7zUQQ/viewform"} />
            {/* <EventCard
            title="SynMUN"
            description1={"🎬Calling all aspiring filmmakers! It's time to bring your storytelling skills to life through Lens Flare, Synergy's short film competition. The pages of time turn, revealing stories untold. Dive into the theme 'The Metamorphosis of Time' and unleash your creativity to shape the past, present, and future.🎥"} 
            image={lensflare}
            details={"https://iiitbac-my.sharepoint.com/:b:/g/personal/synergy_iiitb_ac_in/Ea5FWwrd4u1MvqB2XHkr6zcBnflgZbikeUXe8kRi8H_VbA?e=MRTaCf"}
            register={"https://docs.google.com/forms/d/e/1FAIpQLSfTktPQMk3OiHmR-PaO74yFyDo5LokL2HEQB1L8LygWkRHIAg/viewform"}
            submit={"https://docs.google.com/forms/d/e/1FAIpQLScH-clXkyoGdMIlHYsp9OG3JahL-hhRa6JZV1PwrsIgB7zUQQ/viewform"} /> */}
            <h1 className="temp_events">Excitement alert : More events are en route !</h1>
        </div>
    );
}
export default Events;
