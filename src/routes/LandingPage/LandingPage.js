import React from 'react'
import './LandingPage.css'

export default class LandingPage extends React.Component {

  render() {
    return (
      <div className='Landing_Page'>
          <p>Enroot is a resource for home gardeners. Users can save plant information 
              to a personal garden page where they can access their own plants at any time.
              As they learn more about their plants (recommended resource is USDA Plants Page,
              linked within the app), they can add data points to keep track of things like 
              minimum temperature, growth period, etc. for their gardens. 
              <br/><br/>
              User can also add tasks on their plants, reminding them of how frequently 
              they should water, prune, weed, or mulch their plants. Tasks can be viewed by the 
              individual plant or on their own page as an overview of all maintenance needed by the 
              garden. Both plants and tasks can be sorted by a variety of properties to aid in 
              organization. 
              <br/><br/>
              Ready to get started? You can register for your own account, or you can test Enroot out
              for yourself by clicking the Log In button above and typing in these login credentials:
              <br/><br/>Username: testuser
              <br/>Password: Password2@
              </p>
            <div className = 'contact'>
              <hr/>
              <address>
                  <a href='https://leilaanderson.dev' target='_blank' rel='noopener noreferrer' className='portfolio-pic'><img src='https://i.imgur.com/KTeC5RF.png' alt='Portfolio' id='portfolio-pic'/>
                  <span className="tooltiptext">View Portfolio</span></a>
                  <a href='mailto:leila@leilaanderson.dev' target='_blank' rel='noopener noreferrer' className='email-pic'><img src='https://i.imgur.com/TJRUfCX.png' alt='Email' id='email-pic'/>
                  <span className="tooltiptext">Email Developer</span></a>
                  <a href='https://www.linkedin.com/in/leilaanderson/' target='_blank' rel='noopener noreferrer' className='linkedin-pic'><img src='https://i.imgur.com/K9zNzW1.png' alt='LinkedIn' id='linkedin-pic'/>
                  <span className="tooltiptext">Connect on LinkedIn</span></a>
                  <a href='https://github.com/Leil-ish' target='_blank' rel='noopener noreferrer' className='github-pic'><img src='https://i.imgur.com/jHZd0pE.png'  alt='GitHub' id='github-pic'/>
                  <span className="tooltiptext">View GitHub</span></a>
              </address>
            </div>
          </div>
    )
  }
}