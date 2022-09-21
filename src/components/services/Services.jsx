import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
{/* web development */}
<div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsuerlit sequi quocon</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor siverisi aspernatur con</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum do vero rsequi quo nisi atur con</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolort nisi aspernatur con</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p> quidem apelibhbbgbbgbbbbhbbbtur con</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>tate velit sequi quo nisi aspernatur con</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>lae cupisi aspernatur con</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>ndae cupidunnnnatur con</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
