import React from 'react'
import './portfolio.css'
import panthere from '../../assets/la_Panthere.png'


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
    image: panthere,
    title: 'La panthere',
    github: 'https://github.com',
    demo: 'https://moussabamba93400.github.io/Projet-4-OC-site-Optimiser/'
  },
  {
    id: 3,
    image: panthere,
    title: 'La panthere',
    github: 'https://github.com',
    demo: 'https://moussabamba93400.github.io/Projet-4-OC-site-Optimiser/'
  },
  {
    id: 4,
    image: panthere,
    title: 'La panthere',
    github: 'https://github.com',
    demo: 'https://moussabamba93400.github.io/Projet-4-OC-site-Optimiser/'
  },
  {
    id: 5,
    image: panthere,
    title: 'La panthere',
    github: 'https://github.com',
    demo: 'https://moussabamba93400.github.io/Projet-4-OC-site-Optimiser/'
  },
  {
    id: 6,
    image: panthere,
    title: 'La panthere',
    github: 'https://github.com',
    demo: 'https://moussabamba93400.github.io/Projet-4-OC-site-Optimiser/'
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
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
