import React from 'react';
import Portfolio from '../pages/Portfolio';
import firstImg from '../img/screenshot-main.jpg'
import secondImg from '../img/air-quality-home-page.jpg'
import thirdImg from '../img/NoteTaker.png'
import fourthImg from '../img/Screenshot 2022-07-24 153656.png'
import fifthImg from '../img/Screenshot 2022-07-29 145947.png'
import sixthImg from '../img/JATE.jpg'
import projects from "./projects.json"
function Projects() {
  return (
    <div className='App'>

      {projects.map(element => {
        return <div>
        <h1><a href={props.oneLive}>{props.one}</a></h1>
        <a href={props.oneLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.oneImg} alt={props.one}></img>
        </a>
        <a
          href={props.oneRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>
      })}

      </div>
  );
}

export default Projects;
<div>
      <Portfolio 
      one='Health Tracker'
      oneImg={firstImg}
      oneLive='https://evening-reef-97935.herokuapp.com/'
      oneRepo='https://github.com/heintze11/health-tracker'

      two='Air Quality/Greenhouse Gas Comparison'
      twoImg={secondImg}
      twoLive='https://thaling11.github.io/air-quality-comparison/'
      twoRepo='https://github.com/thaling11/air-quality-comparison'

      three='Note Taker'
      threeImg={thirdImg}
      threeLive='https://where-is-my-notebook.herokuapp.com/'
      threeRepo='https://github.com/AFaidley/Where-is-my-notebook-'

      four='Work-day Scheduler'
      fourImg={fourthImg}
      fourLive='https://afaidley.github.io/Time-to-schedule-my-work-day/'
      fourRepo='https://github.com/AFaidley/Time-to-schedule-my-work-day'

      five='Weather App'
      fiveImg={fifthImg}
      fiveLive='https://afaidley.github.io/Cloudy-with-a-chance-of-meatballs/'
      fiveRepo='https://github.com/AFaidley/Cloudy-with-a-chance-of-meatballs'

      six='PWA- Text Editor'
      sixImg={sixthImg}
      sixLive='https://text-editing-time.herokuapp.com/'
      sixRepo='https://github.com/AFaidley/Come-on-web-app-be-more-progressive'/>
    </div>