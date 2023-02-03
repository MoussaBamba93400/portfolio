import React from 'react'
import './about.css';
import ME from '../../assets/best-programming.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id="about">
    <h2>A propos de moi</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className="about__me-image">
          <img src={ME} alt="About" />
        </div>
      </div>

      <div className="about__content">
         <div className="about__cards">
          <article className='about__card'>
            <VscFolderLibrary  className='about__icon'/>
            <h5>Experience</h5>
            <small>Bac+2 Openclassrooms</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary  className='about__icon'/>
            <h5>Experience</h5>
            <small>Développeur web en alterance chez Allegro musique</small>
          </article>

          <article className='about__card'>
            <FiUsers  className='about__icon'/>
            <h5>Clients</h5>
            <small>None yet</small>
          </article>
          
          <article className='about__card'>
            <FaAward  className='about__icon'/>
            <h5>Projects</h5>
            <small>8 completed</small>
          </article>
         </div>

         <p>
         Bonjour je suis un jeune développeur de 21 ans, je suis ouvert au demande de conception de site vitrine professionel. Actuellement je travaille chez allegro musique sur la stack Laravel, Vue.js je suis aussi compétent sur les technologie React, node.js avec mongoDB et MySQL en base de données, mais je suis près a apprendre les technologie nécessaire pour votre projet.
         </p>

         <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About
