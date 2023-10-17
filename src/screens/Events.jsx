import Title_Jumbotron from "../components/Title_Jumbotron";
import { events_page_subtitle } from "../content/subtitle_texts";
import EventCard from "../components/event_card";
import "./Events.scss";
import lensflare from "../assets/lensflare.png";
import synmun from "../assets/synmun.png";
import pp from "../assets/pp.png";
import pixelFlow from "../assets/pixel-flow.png"
import bs from "../assets/bs.png"
import bitsAndBots from "../assets/bits&bots.png"

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
          "https://drive.google.com/uc?export=download&id=1x1NL9C7hXyTkhy--n504LZXP6dfHl9w-"
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
        btn1_text="Register"
        btn2_text="Submit"
        hide1="lf1"
        hide2="lf2"
        link1={
          "https://docs.google.com/forms/d/e/1FAIpQLSfTktPQMk3OiHmR-PaO74yFyDo5LokL2HEQB1L8LygWkRHIAg/viewform"
        }
        link2={
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
            "https://drive.google.com/uc?export=download&id=14us5HI2Ke8rFPqFjcrsABflipDNuSz5P"
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
        btn1_text="Register on Unstop"
        link1={
          "https://unstop.com/o/tlpTsFa"
        }
        submit={""}
      />

      <EventCard
        title="SynMUN"
        description1={
          "🌍 It's time to bridge the gap between tech and global diplomacy! 💻 Join us at SYNMUN 2023 as we redefine the future where technology and global affairs converge. 🌐 Delegates, prepare to debate, collaborate, and find innovative solutions to global challenges alongside world leaders, companies, and activists."
        }
        image={synmun}
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
        text2="Event Details"
        text3="Matrix"
        btn1_text="Individual Registration"
        btn2_text="Delegation Registration"
        hide1="sm1"
        hide2="sm2"
        secondlink="secondlink"
        details="https://drive.google.com/uc?export=download&id=1DZbFmnC4sxF11nYxwLormzYnEunXRSFi"
        details2="https://drive.google.com/uc?export=download&id=1R5xDEk3BBgvly3ReK2GNFrX-eIhWWIgG"
        link1="https://forms.gle/DDnKGSopVYjtWGLi6"
        link2="https://forms.gle/FvDxYd8SteJnNGed9"
      />

      <EventCard
        title="Pixel Flow"
        description1={
          'Synergy presents "Pixel Flow," a thrilling journey into the world of UI/UX design. Unleash your creative genius, innovate, and be part of shaping the future of user interfaces.'
        }
        image={pixelFlow}
        text2="Event Details"
        hide2="pp2"
        details={
            "https://drive.google.com/uc?export=download&id=1ggG4eyxg4DE_g7iJAPAAPJVYkIVfi8eb"
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
            btn1_text="Register on Unstop"
        link1={
          "https://unstop.com/hackathons/pixel-flow-international-institute-of-information-technology-iiit-bangalore-796739"
        }
        link2={""}
      />

      <EventCard
        title="ByteSynergy 2.0"
        description1={
          "Bytesynergy, hosted by IIIT-B, is a thrilling hackathon where tech enthusiasts converge to tackle challenges collectively. Over 3 weeks of coding and creativity, participants harness tech's potential to foster synergy and craft impactful solutions, all while competing for exciting prizes. Compete, collaborate, and forge valuable tech connections at this innovation-driven event."
        }
        image={bs}
        text2="Event Details"
        hide2="pp2"
        details={
            "https://unstop.com/hackathons/byte-synergy-20-international-institute-of-information-technology-iiit-bangalore-796046"
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
            btn1_text="Register on Unstop"
        link1={
          "https://unstop.com/hackathons/byte-synergy-20-international-institute-of-information-technology-iiit-bangalore-796046"
        }
        link2={""}
      />

      <EventCard
        title="Bits & Bots"
        description1={
          "Unleash your creativity and code the IoT products of tomorrow at Bits & Bots - a groundbreaking hackathon focused on hardware innovation. Design sensor-based applications and watch your ideas come to life by generating custom RISC-V code and prototyping on FPGAs. Over Rs. 25,000 in prizes await the visionaries who push boundaries and create the next generation of connected devices. Join us for 48 hours of non-stop making and hacking - creativity clashes in this crazed creation competition where madness meets maker magic!"
        }
        image={bitsAndBots}
        text2="Event Details"
        hide2="pp2"
        details={
            "https://unstop.com/hackathons/bits-bots-international-institute-of-information-technology-iiit-bangalore-796966"
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
            btn1_text="Register on Unstop"
        link1={
          "https://unstop.com/hackathons/bits-bots-international-institute-of-information-technology-iiit-bangalore-796966"
        }
        link2={""}
      />

      <h1 className="temp_events">
        Excitement alert : More events are en route !
      </h1>
    </div>
  );
}
export default Events;
