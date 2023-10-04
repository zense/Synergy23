import "./event_card.scss";
import OneFaqQuestion from "./One_faq_question";
import rect from "../assets/rectangle55.png";
import lensflare from "../assets/lensflare.png"
function EventCard(props) {
  return (
    <div className="EventCard container">
      <div className="row">
        <div className="col-5 d-none d-md-block imagecol">
        <div className="row">
            <div className="col-10">
            <img src={lensflare} alt="" className="sideimg"/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row title_row">{props.title}</div>
          <div className="row d-block d-md-none mb-4">
            <div className="col-6">
            <img src={lensflare} alt="" className="sideimg"/>
            </div>
          </div>
          <div className="row">     
            <div class="accordion" id="accordionExample">
                <div className='accordion-content'>
                    <div className="event_text">{props.description1}</div>
                </div>
                <div className='accordion-content'>
                    <div className="event_text"><a href="https://iiitbac-my.sharepoint.com/personal/synergy_iiitb_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsynergy_iiitb_ac_in%2FDocuments%2FSynergy '23%2FEvents%2FLens Flare%2FLens Flare.pdf&parent=%2Fpersonal%2Fsynergy_iiitb_ac_in%2FDocuments%2FSynergy '23%2FEvents%2FLens Flare&ga=1" target="_blank">Event Details    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
</svg></a></div>
                </div>
            </div>

          </div>
          <div className="row">
            {/* <div className="col"></div> */}
            <div className="col buttoncol">
            <p className="d-flex align-items-center justify-content-center"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfTktPQMk3OiHmR-PaO74yFyDo5LokL2HEQB1L8LygWkRHIAg/viewform" target="_blank" className="btn btn-purple d-flex align-items-center justify-content-center top_button">
              Register
            </a></p>
            </div>
            <div className="col">
            <p className="d-flex align-items-center justify-content-center"><a href="https://docs.google.com/forms/d/e/1FAIpQLScH-clXkyoGdMIlHYsp9OG3JahL-hhRa6JZV1PwrsIgB7zUQQ/viewform" target="_blank" className="d-flex align-items-center justify-content-center btn btn-purple">
              Submit
            </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}



export default EventCard;
