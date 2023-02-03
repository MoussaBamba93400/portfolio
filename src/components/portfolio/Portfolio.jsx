import React from 'react'
import './portfolio.css'
import panthere from '../../assets/la_Panthere.png'
import ohmyfood from '../../assets/Ohmyfood.png'
import booki from '../../assets/booki.png'
import kanap from '../../assets/kanap.png'
import kasa from '../../assets/kasa.png'
import shoes_page from '../../assets/Shoes_page.jpg'


const data = [
  {
    id: 1,
    image: panthere,
    title: 'La panthere',
    github: 'https://github.com/MoussaBamba93400/Projet-4-OC-site-Optimiser',
    demo: 'https://moussabamba93400.github.io/Projet-4-OC-site-Optimiser/'
  },
  {
    id: 2,
    image: ohmyfood,
    title: 'Oh my food',
    github: 'https://github.com/MoussaBamba93400/projetOC3-ohmyfood',
    demo: 'https://moussabamba93400.github.io/projetOC3-ohmyfood/'
  },
  {
    id: 3,
    image: booki,
    title: 'Booki',
    github: 'https://github.com/MoussaBamba93400/OpenClassroom',
    demo: 'https://moussabamba93400.github.io/OpenClassroom/'
  },
  {
    id: 4,
    image: kanap,
    title: 'Kanap',
    github: 'https://github.com/MoussaBamba93400/P5-OC-Kanap',
    demo: 'https://genuine-puppy-3aa317.netlify.app/html/'
  }, 
  {
    id: 5,
    image: kasa,
    title: 'Kasa',
    github: 'https://github.com/MoussaBamba93400/OC-P7-site-location',
    demo: 'https://kasa-location-immobiliere.netlify.app/'
  }, 
  
  {
    id: 6,
    image: shoes_page,
    title: 'Shoes product page',
    github: 'https://github.com/MoussaBamba93400/product-page-challenge',
    demo: 'https://product-page-challenge.netlify.app/'
  },
  {
    id: 7,
    image: shoes_page,
    title: 'Payment Card',
    github: 'https://github.com/MoussaBamba93400/payement-card',
    demo: 'https://venerable-churros-431d5f.netlify.app/'
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map((project) => {
            return (
              <article key={project.id} className='portfolio__item'>
            <div className="portfolio__item-image">
               <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
            <a href={project.github} className='btn' rel="noreferrer" target='_blank'>Github</a>
            <a href={project.demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a>
            </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
