import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
 
const form = useRef()

function refreshPage() {
  window.location.reload(false);
}


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xo4rr33', 'template_dw0lmjf', form.current, '6h5wUDbL4OjMc0F_h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
           <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>moussabulls1@gmail.com</h5>
            <a href="mailto:moussabulls1@gmail.com"  rel="noreferrer"  target="_blank">Send a message</a>
           </article>
           <article className="contact__option">
            <AiFillLinkedin  className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>moussabulls1@gmail.com</h5>
            <a href="https://www.linkedin.com/in/moussabamba20/"  rel="noreferrer"  target="_blank">Check my profile</a>
           </article>
           <article className="contact__option">
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>What's app</h4>
            <h5>+33 6 51 73 41 50</h5>
            <a href="https://api.whatsapp.com/send?phone+330651734150"  rel="noreferrer"  target="_blank">Send a message</a>
           </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" id="" rows="10" placeholder=''></textarea>
          <button type='submit' className='btn btn-primary' onClick={refreshPage}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
