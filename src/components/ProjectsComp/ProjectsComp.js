import React from 'react'
import './projectsComp.css'

const ProjectsComp = () => {
  return (
    <div>

      <div class="col-12 mb-2 bg-dark text-light p-3">
        <h3 class="portfolio-item-title text-light">Wanderosa</h3>
        <h5 class="portfolio-languages">
          Built With:
          GraphQL, REACT, Apollo, Express
        </h5>
        <p><strong>Have you ever wanted to have one easy place to plan out your days on vacation? Well Wanderosa is an app that is set up to do just that. Jump in and plan your next holiday with our simple interface and keep your itinerary ready to be used while out wandering!</strong></p>
        <a href="https://wanderosa.herokuapp.com" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
      </div>

      <div class="col-12 mb-2 bg-dark text-light p-3">
        <h3 class="portfolio-item-title text-light">Band-Gogh</h3>
        <h5 class="portfolio-languages">
          Built With:
          Javascript, HTML, CSS, REST APIs, Handlebars
        </h5>
        <p><strong>Band-Gogh is an app focused on giving local musicians a platform to publicize upcoming events and for listeners to find new local music and concerts.</strong></p>
        <a href="https://band-gogh.herokuapp.com/" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
      </div>

      <div class="col-12 mb-2 bg-dark text-light p-3">
        <h3 class="portfolio-item-title text-light">Lorem Sipsum</h3>
        <h5 class="portfolio-languages">
          Built With:
          Javascript, HTML, CSS
        </h5>
        <p><strong>Lorem Sipsum provides one place to find an event in your area as well as nearby Restaraunts and Breweries to give you options to set up the perfect night out.</strong></p>
        <a href="https://cshepscorp.github.io/lorem-sipsum/" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
      </div>
    </div>
  )
}

export default ProjectsComp