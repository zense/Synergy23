import "./event_card.scss";
import OneFaqQuestion from "./One_faq_question";
import rect from "../assets/rectangle55.png";
function EventCard(props) {
  return (
    <div className="EventCard container">
      <div className="row">
        <div className="col-5 d-none d-md-block imagecol">
        <div className="row">
            <div className="col-10 offset-2">
            <img src={rect} alt="" className="sideimg"/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row title_row">{props.title}</div>
          <div className="row d-block d-md-none mb-4">
            <div className="col-6 offset-3">
            <img src={rect} alt="" className="sideimg"/>
            </div>
          </div>
          <div className="row">     
            <div class="accordion" id="accordionExample">
                <div className='accordion-content'>
                    <div className="event_text">"An excessively long question to see how the button handles really really hot stuff. It handles it well. Nice!!"</div>
                </div>
                <div className='accordion-content'>
                    <div className="event_text">"An excessively long question to see how the button handles really really hot stuff. It handles it well. Nice!!"</div>
                </div>
            </div>

          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col buttoncol">
            <p><a href="#" className="btn btn-purple">
              Register
            </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}



export default EventCard;
