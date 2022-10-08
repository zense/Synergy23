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
          <div className="row d-block d-md-none">
            <div className="col-6 offset-3">
            <img src={rect} alt="" className="sideimg"/>
            </div>
          </div>
          <div className="row">
            
            <div class="accordion accordion-flush" id="accordionExample">
              <OneFaqQuestion heading = "An excessively long question to see how the button handles really really hot stuff. It handles it well. Nice!!" body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor dignissimos eum ea, enim corporis harum rerum voluptatibus ducimus quae quidem consectetur fuga assumenda ex laborum officia perspiciatis tempore, iure vitae mollitia. Unde, maxime? Aperiam nemo reprehenderit, magnam tempore alias nesciunt assumenda voluptatem, facere vero accusamus repellat optio, facilis labore?"
              id = "one"
              />
              <OneFaqQuestion heading = "Another seemingly important but actually stupid question" body = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum neque molestias mollitia. Mollitia et dicta esse aspernatur, praesentium quod ea distinctio omnis aliquam quidem illum sunt molestias quia minus labore dolorem voluptas laudantium suscipit amet? Ducimus ut cupiditate dolor modi porro consequuntur. Cupiditate alias reprehenderit omnis dicta ea voluptas itaque. Voluptatum optio repellat quisquam laborum magni excepturi dignissimos distinctio expedita?"
              id = "two"/>
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
