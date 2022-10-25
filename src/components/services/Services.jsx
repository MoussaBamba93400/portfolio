import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Mes services</h2>
{/* web development */}
<div className="container services__container">
        <article className='service web-dev'>
          <div className="service__head">
            <h3>Développement Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Intégration HTML/CSS</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Dynamise des pages par Javascript/AJAX</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Validation W3C, réferencement naturel Seo</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Intégration d'application React</p>
            </li>
          </ul>
        </article>


        

      </div>
    </section>
  )
}

export default Services
