import Title_Jumbotron from "../components/Title_Jumbotron";
import { events_page_subtitle } from '../content/subtitle_texts';
import EventCard from "../components/event_card";
import './Events.scss'
import lensflare from "../assets/lensflare.png"
import synmun from "../assets/synmun.png"

function Events() {
    return (
        <div className="Events">
            <Title_Jumbotron bigHeader={"Discover"} bigHeaderCaps={"Synergy"} subtitle={events_page_subtitle} />
            <EventCard
            title="Lens Flare"
            description1={"🎬Calling all aspiring filmmakers! It's time to bring your storytelling skills to life through Lens Flare, Synergy's short film competition. The pages of time turn, revealing stories untold. Dive into the theme 'The Metamorphosis of Time' and unleash your creativity to shape the past, present, and future.🎥"} 
            image={lensflare}
            text2="Event Details"
            details={'../assets/LensFlare.pdf'}
            register={"https://docs.google.com/forms/d/e/1FAIpQLSfTktPQMk3OiHmR-PaO74yFyDo5LokL2HEQB1L8LygWkRHIAg/viewform"}
            submit={"https://docs.google.com/forms/d/e/1FAIpQLScH-clXkyoGdMIlHYsp9OG3JahL-hhRa6JZV1PwrsIgB7zUQQ/viewform"} />

            <EventCard
            title="SynMUN"
            description1={"🌍 It's time to bridge the gap between tech and global diplomacy! 💻 Join us at SYNMUN 2023 as we redefine the future where technology and global affairs converge. 🌐 Delegates, prepare to debate, collaborate, and find innovative solutions to global challenges alongside world leaders, companies, and activists."} 
            image={synmun}
            text2="Registration opening shortly! Stay tuned."
            hide1="btn1"
            hide2="btn2"
            details=""
            register={""}
            submit={""} />
            <h1 className="temp_events">Excitement alert : More events are en route !</h1>
        </div>
    );
}
export default Events;
