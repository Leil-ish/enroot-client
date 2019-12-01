import React from 'react'
import './LandingPage.css'

export default class LandingPage extends React.Component {

  render() {
    return (
      <div className='Landing_Page'>
          <p>This app is a resource for home gardeners. It will pull data from a 
              third party plant API (Trefle) that contains information about plant 
              tend, planting, shade needs, etc. Users can look up any plants 
              in their yards/gardens, get info on them, and save them to a personal 
              garden page where they can access their 
              own plants at any time to remind themselves of what they need to be 
              doing to take care of their plants. They will be able to add Google 
              Calendar reminders to do things like water their trees and renew their 
              mulch.</p>
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