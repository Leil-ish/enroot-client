import React from 'react'
import './LandingPage.css'

export default class LandingPage extends React.Component {

  render() {
    return (
      <div className='Landing_Page'>
          <p>This app is a resource for home gardeners. Users can save plant information 
              to a personal garden page where they can access their own plants at any time 
              to remind themselves of what they need to be doing to take care of their plants. </p>
            <div className = 'contact'>
              <address>
                  <a href="https://leilaanderson.dev" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/KTeC5RF.png" alt="Portfolio" id="linkedin-pic"/></a>
                  <a href="mailto:leila@leilaanderson.dev" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/TJRUfCX.png" alt="Email" id="email-pic"/></a>
                  <a href="https://www.linkedin.com/in/leilaanderson/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/K9zNzW1.png" alt="LinkedIn" id="linkedin-pic"/></a>
                  <a href="https://github.com/Leil-ish" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/jHZd0pE.png"  alt="GitHub" id="github-pic"/></a>
              </address>
            </div>
          </div>
    )
  }
}