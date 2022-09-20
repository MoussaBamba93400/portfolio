import React from 'react'
import './footer.css'
import {AiFillLinkedin } from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>


      <ul className='permalinks'>
        <li><a href="#about">Home</a></li>
        <li><a href="#experience">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/moussabamba20/"><AiFillLinkedin  /></a>
        <a href="https://github.com/MoussaBamba93400"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/moussabamba20/"></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Moussa Bamba. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer
