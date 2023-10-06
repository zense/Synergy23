import { useEffect } from "react";
import "./event_card.scss";
function EventCard(props) {
  useEffect(() => {
    let btn1 = document.getElementById("btn1")
    btn1.className="d-none"
    let btn2 = document.getElementById("btn2")
    btn2.className="d-none"
  }, [])
  
  return (
    <div className="EventCard container">
      <div className="row">
        <div className="col-5 d-none d-md-block imagecol">
          <div className="row">
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
                    download={true}
                    target="_blank"
                  >
                    {props.text2}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-link"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                      <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row button_container d-flex">
            <div className="col btn btn-purple d-flex align-items-center justify-content-center" id={props.hide1}>
              <a
                href={props.register}
                target="_blank"
                className="d-flex align-items-center justify-content-center"
              >
                Register
              </a>
            </div>
            <div className="col btn btn-purple d-flex align-items-center justify-content-center" id={props.hide2}>
              <a
                href={props.submit}
                target="_blank"
                className="d-flex align-items-center justify-content-center"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
