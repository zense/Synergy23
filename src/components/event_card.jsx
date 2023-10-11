import { useEffect } from "react";
import "./event_card.scss";
function EventCard(props) {
  useEffect(() => {
    let btn1 = document.getElementById("sm2")
    btn1.className="col btn btn-purple d-flex align-items-center justify-content-center"
    let btn2 = document.getElementById("secondlink")
    btn2.className="accordion-content"
    // let btn2 = document.getElementById("sm2")
    // btn2.className="d-none"
    // let pp2 = document.getElementById("pp2")
    // pp2.className="d-none"
  }, [])
  
  return (
    <div className="EventCard container aos-init" data-aos="zoom-in-up" >
      <div className="row">
        <div className="col-5 d-none d-md-block imagecol">
          <div className="row d-flex justify-content-center">
            <div className="col-10">
              <img src={props.image} alt="" className="sideimg imgdesktop" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row title_row">{props.title}</div>
          <div className="row d-block d-md-none mb-4">
            <div className="col-6">
              <img src={props.image} alt="" className="sideimg" />
            </div>
          </div>
          <div className="row">
            <div class="accordion" id="accordionExample">
              <div className="accordion-content">
                <div className="event_text">{props.description1}</div>
              </div>
              <div className="accordion-content">
                <div className="event_text">
                  <a
                    className="details_link"
                    href={props.details}
                    target="_blank"
                  >
                    {props.text2}{" "}
                    {props.linkimg}
                  </a>
                </div>
              </div>
              <div className="accordion-content d-none" id={props.secondlink}>
                <div className="event_text">
                  <a
                    className="details_link"
                    href={props.details2}
                    target="_blank"
                  >
                    {props.text3}{" "}
                    {props.linkimg}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row button_container d-flex">
            <div className="col btn btn-purple d-flex align-items-center justify-content-center" id={props.hide1}>
              <a
                href={props.link1}
                target="_blank"
                className="d-flex align-items-center justify-content-center button-link"
              >
                {props.btn1_text}
              </a>
            </div>
             <div className="col btn btn-purple d-flex align-items-center justify-content-center d-none" id={props.hide2}>
              <a
                href={props.link2}
                target="_blank"
                className="d-flex align-items-center justify-content-center button-link"
              >
                {props.btn2_text}
              </a>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
