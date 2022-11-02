import React from 'react';

function Portfolio(props) {
    console.log(props)
  return (
    <div className='App'>
      <h3 id='my-projects'>My Projects</h3>
      <div>
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

      <div>
        <h1><a href={props.twoLive}>{props.two}</a></h1>
        <a href={props.twoLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.twoImg} alt={props.two}></img>
        </a>
        <a
          href={props.twoRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>

      <div>
        <h1><a href={props.threeLive}>{props.three}</a></h1>
        <a href={props.threeLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.threeImg} alt={props.three}></img>
        </a>
        <a
          href={props.threeRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>

      <div>
        <h1><a href={props.fourLive}>{props.four}</a></h1>
        <a href={props.fourLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.fourImg} alt={props.four}></img>
        </a>
        <a
          href={props.fourRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>

      <div>
        <h1><a href={props.fiveLive}>{props.five}</a></h1>
        <a href={props.fiveLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.fiveImg} alt={props.five}></img>
        </a>
        <a
          href={props.fiveRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>

      <div>
        <h1><a href={props.sixLive}>{props.one}</a></h1>
        <a href={props.sixLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.sixImg} alt={props.six}></img>
        </a>
        <a
          href={props.sixRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>

      
    </div>
  );
}

export default Portfolio;