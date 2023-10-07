import Title_Jumbotron from "../components/Title_Jumbotron";
import { events_page_subtitle } from "../content/subtitle_texts";
import EventCard from "../components/event_card";
import "./Events.scss";
import lensflare from "../assets/lensflare.png";
import synmun from "../assets/synmun.png";
import pp from "../assets/pp.png";

function Events() {
  return (
    <div className="Events">
      <Title_Jumbotron
        bigHeader={"Discover"}
        bigHeaderCaps={"Synergy"}
        subtitle={events_page_subtitle}
      />
      <EventCard
        title="Lens Flare"
        description1={
          "🎬Calling all aspiring filmmakers! It's time to bring your storytelling skills to life through Lens Flare, Synergy's short film competition. The pages of time turn, revealing stories untold. Dive into the theme 'The Metamorphosis of Time' and unleash your creativity to shape the past, present, and future.🎥"
        }
        image={lensflare}
        text2="Event Details"
        details={
          "https://drive.google.com/uc?export=download&id=1_yiTSTklhpdOfPQqyL6BZoJlkI_kw3yD"
        }
        linkimg={<svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-link"
            viewBox="0 0 16 16"
          >
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
          </svg>}
        register={
          "https://docs.google.com/forms/d/e/1FAIpQLSfTktPQMk3OiHmR-PaO74yFyDo5LokL2HEQB1L8LygWkRHIAg/viewform"
        }
        submit={
          "https://docs.google.com/forms/d/e/1FAIpQLScH-clXkyoGdMIlHYsp9OG3JahL-hhRa6JZV1PwrsIgB7zUQQ/viewform"
        }
      />

      <EventCard
        title="Pitching Pixels"
        description1={
          "Welcome to Pitching Pixels, your gateway to the future of startups. Immerse yourself in our dynamic hackathon, where innovation and entrepreneurship intertwine. Join us on a journey to bring your startup ideas to life, turning dreams into successful businesses. Discover the power of collaboration, creativity, and technology at Pitching Pixels!"
        }
        image={pp}
        text2="Event Details"
        hide2="pp2"
        details={
            "https://drive.google.com/uc?export=download&id=1b4Y8fUhUrCtSX854oi2m4FoazWKEyMHs"
          }
        linkimg={<svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-link"
              viewBox="0 0 16 16"
            >
              <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
              <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
            </svg>}
        register={
          "https://docs.google.com/forms/d/e/1FAIpQLSeuJr_17cQXBrO7boOP-BOPO_U5NGrtFBSR2swA-5O87HT9fQ/viewform?usp=sf_link"
        }
        submit={""}
      />

      <EventCard
        title="SynMUN"
        description1={
          "🌍 It's time to bridge the gap between tech and global diplomacy! 💻 Join us at SYNMUN 2023 as we redefine the future where technology and global affairs converge. 🌐 Delegates, prepare to debate, collaborate, and find innovative solutions to global challenges alongside world leaders, companies, and activists."
        }
        image={synmun}
        text2="Registration opening shortly! Stay tuned."
        hide1="sm1"
        hide2="sm2"
        details=""
        register={""}
        submit={""}
      />

      <h1 className="temp_events">
        Excitement alert : More events are en route !
      </h1>
    </div>
  );
}
export default Events;
