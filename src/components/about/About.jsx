import React from 'react'
import './about.css';
import ME from '../../assets/profile.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

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
            <small>9 months learning</small>
          </article>

          <article className='about__card'>
            <FiUsers  className='about__icon'/>
            <h5>Clients</h5>
            <small>None yet</small>
          </article>
          
          <article className='about__card'>
            <FaAward  className='about__icon'/>
            <h5>Projects</h5>
            <small>5 completed</small>
          </article>
         </div>

         <p>
         Hi i'm a 21 yrs old junior web developer, i'm open to any work proposal that will help me improve my skills. I'm currently more efficient on frontend but ready to work on backend Projects.
         </p>

         <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About
