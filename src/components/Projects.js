import React from 'react';
import Portfolio from '../pages/Portfolio';
import firstImg from '../img/screenshot-main.jpg';
import secondImg from '../img/google book search.jpg';
import thirdImg from '../img/NoteTaker.png';
import fourthImg from '../img/Screenshot 2022-07-24 153656.png';
import fifthImg from '../img/Screenshot 2022-07-29 145947.png';
import sixthImg from '../img/JATE.jpg';
import seventhImg from '../img/KIN.jpg';

function Projects() {
  return (
    <div className='App'>
      <Portfolio
        one='Health Tracker'
        oneImg={firstImg}
        oneLive='https://evening-reef-97935.herokuapp.com/'
        oneRepo='https://github.com/heintze11/health-tracker'
        seven='KIN'
        sevenImg={seventhImg}
        sevenLive='https://knowledge-in-numbers.herokuapp.com/'
        sevenRepo='https://github.com/AFaidley/KIN'
        two='Google Book Search'
        twoImg={secondImg}
        twoLive='https://okay-google-search-for-a-book.herokuapp.com/'
        twoRepo='https://github.com/AFaidley/okay-google-find-me-a-book'
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
        sixRepo='https://github.com/AFaidley/Come-on-web-app-be-more-progressive'
      />
    </div>
  );
}

export default Projects;
