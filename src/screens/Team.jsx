import Title_Jumbotron from "../components/Title_Jumbotron";
import { team_page_subtitle } from "../content/subtitle_texts";
import "./Team.scss";
import { Container, Row, Col } from "react-bootstrap";
import { teams } from "../content/teams";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import Card from "../components/Card";

const Teams = () => {
  return (
    <div className="Teams">
      <Title_Jumbotron
        bigHeader={"Meet the people who made it"}
        bigHeaderCaps={"ALL"}
        subtitle={team_page_subtitle}
      />
      <Container className="wrapper">
        <h1 className="wrapper__heading aos-init" data-aos="fade-up">
          {teams[0].group}
          <span className="dot_color">.</span>
        </h1>
        <Row>
          <div className="card-body col-sm-6 col-md-4 col-lg-3 gap-5 col-xl-2 d-flex justify-content-center">
            <Card
              img={image1}
              content={teams[0].list[0].content}
              insta="https://www.instagram.com/anshavikhanna/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
              linkedin="https://www.linkedin.com/in/ansh-avi-khanna-4a9a3421b/"
            />
            <Card
              img={image2}
              content={teams[0].list[1].content}
              insta="https://www.instagram.com/goutham_ur/"
              linkedin="https://www.linkedin.com/in/goutham-u-r-054259267/"
            />
            <Card
              img={image3}
              content={teams[0].list[2].content}
              insta="https://www.instagram.com/saimadhavang/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
              linkedin="https://www.instagram.com/saimadhavang/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            />
          </div>
        </Row>
      </Container>
      <Container className="wrapper">
        <h1 className="wrapper__heading aos-init" data-aos="fade-up">
          {teams[1].group}
          <span className="dot_color">.</span>
        </h1>
        <Row>
          <div className="card-body col-sm-6 col-md-4 col-lg-3 gap-5 col-xl-2 d-flex justify-content-center">
            <Card
              img={d1}
              content={teams[1].list[0].content}
              insta="https://www.instagram.com/mr_rohit_shah_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
              linkedin="https://www.linkedin.com/in/rohit-shah-9a8289228/"
            />
            <Card
              img={d2}
              content={teams[1].list[1].content}
              insta="https://www.instagram.com/ananthak_k/"
              linkedin="https://www.linkedin.com/in/ananthakrishna-k-391246253/"
            />
            <Card
              img={d3}
              content={teams[1].list[2].content}
              insta="https://www.instagram.com/subhajeetlahiri/"
              linkedin="https://www.linkedin.com/in/subhajeet-lahiri-2a7917223/"
            />
          </div>
        </Row>
      </Container>
      <Container className="wrapper">
        <h1 className="wrapper__heading aos-init" data-aos="fade-up">
          {teams[2].group}
          <span className="dot_color">.</span>
        </h1>
        <Row>
          <div className="card-body col-sm-6 col-md-4 col-lg-3 gap-5 col-xl-2 d-flex justify-content-center">
            <Card
              img={m1}
              content={teams[2].list[0].content}
              insta="https://www.instagram.com/_sarthak_harne_/"
              linkedin="https://www.linkedin.com/in/sarthak-harne/"
            />
            <Card
              img={m2}
              content={teams[2].list[1].content}
              insta="https://www.linkedin.com/in/anshul1601"
              linkedin="https://www.linkedin.com/in/anshul1601"
            />
            <Card
              img={m3}
              content={teams[2].list[2].content}
              insta="https://www.instagram.com/chinthann_/"
              linkedin="https://www.linkedin.com/in/chinthanchandra/"
            />
            <Card
              img={m4}
              content={teams[2].list[3].content}
              insta="https://www.instagram.com/suckupforyournovel/"
              linkedin="https://www.linkedin.com/in/monjoy-narayan-choudhury-a424b3200/"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default Teams;
