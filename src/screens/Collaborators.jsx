import React from 'react'
import './Collaborators.scss'
import Title_Jumbotron from '../components/Title_Jumbotron'
import { collab_page_subtitle } from '../content/subtitle_texts';
import { Container } from 'react-bootstrap';
import ic_logo from '../assets/ic_logo.png'
import ctridg_logo from '../assets/ctridg_logo.png'
import ehrc_logo from '../assets/ehrc_logo.png'
import wsl_logo from '../assets/wsl_logo.jpeg'

const Collaborators = () => {
  return (
    <div className='collab'>
        <Title_Jumbotron bigHeader={"Our Sponsors"} bigHeaderCaps={"& Collaborators"} subtitle={collab_page_subtitle} />
        {/* <Container className="wrapper">
            <h1 className="collab_heading">Sponsors<span className="dot_color">.</span></h1>
        </Container> */}
        <Container className="wrapper">
            <h1 className="collab_heading">Collaborators<span className="dot_color">.</span></h1>
            <div className="lab-logos d-flex justify-content-center align-items-center">
               <a href="https://ic.iiitb.ac.in/" target='_blank'><img src={ic_logo} alt="" /></a>
               <a href="https://www.iiitb.ac.in/media/iiit-bangalore-announces-gok-funded-digital-governance-and-datadriven-planning-initiatives" target='_blank'><img src={ctridg_logo} alt="" /></a>
               <a href="https://ehrc.iiitb.ac.in/" target='_blank'><img src={ehrc_logo} alt="" /></a>
               <a href="https://wsl.iiitb.ac.in/" target='_blank'><img src={wsl_logo} alt="" /></a>
            </div>   
        </Container>
    </div>
  )
}

export default Collaborators