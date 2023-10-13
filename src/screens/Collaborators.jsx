import React from 'react'
import './Collaborators.scss'
import Title_Jumbotron from '../components/Title_Jumbotron'
import { collab_page_subtitle } from '../content/subtitle_texts';
import { Container } from 'react-bootstrap';
import meity_logo from '../assets/sponsors/1.png'
import ic_logo from '../assets/sponsors/2.png'
import ctridg_logo from '../assets/sponsors/3.png'
import ehrc_logo from '../assets/sponsors/4.png'
import wsl_logo from '../assets/sponsors/5.png'

const Collaborators = () => {
  return (
    <div className='collab'>
        <Title_Jumbotron bigHeader={"Our Sponsors"} bigHeaderCaps={"& Collaborators"} subtitle={collab_page_subtitle} />
        <Container className="wrapper">
            <h1 className="collab_heading">Sponsors<span className="dot_color">.</span></h1>
            <div className="lab-logos d-flex justify-content-center align-items-center aos-init" data-aos="fade-up" >
               <a href="https://www.meity.gov.in/" target='_blank'><img src={meity_logo} alt="" /></a>
               <a href="https://www.iiitb.ac.in/media/iiit-bangalore-announces-gok-funded-digital-governance-and-datadriven-planning-initiatives" target='_blank'><img src={ic_logo} alt="" /></a>
               <a href="https://ic.iiitb.ac.in/" target='_blank'><img src={ctridg_logo} alt="" /></a>
               <a href="https://ehrc.iiitb.ac.in/" target='_blank'><img src={ehrc_logo} alt="" /></a>
               <a href="https://wsl.iiitb.ac.in/" target='_blank'><img src={wsl_logo} alt="" /></a>
            </div>
        </Container>
        {/* <Container className="wrapper">
            <h1 className="collab_heading aos-init" data-aos="fade-up" >Collaborators<span className="dot_color aos-init" data-aos="fade-up">.</span></h1>        
        </Container> */}
    </div>
  )
}

export default Collaborators