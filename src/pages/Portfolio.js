import React from 'react';

function Portfolio(props) {
    console.log(props)
  return (
    <div className='App text-center flexcont'>
      <h2 id='my-projects'>My Projects</h2>
      <div className='projects'>
        <h1><a id='projlinks' href={props.sevenLive}>{props.seven}</a></h1>
        <a href={props.sevenLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.sevenImg} className='img-fluid' alt={props.seven}></img>
        </a>
        <a
          id='projlinks'
          href={props.sevenRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>
      
      <div className='projects'>
        <h1><a id='projlinks' href={props.oneLive}>{props.one}</a></h1>
        <a href={props.oneLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.oneImg} className='img-fluid' alt={props.one}></img>
        </a>
        <a
          id='projlinks'
          href={props.oneRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>


      <div className='projects'>
        <h1><a id='projlinks' href={props.twoLive}>{props.two}</a></h1>
        <a href={props.twoLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.twoImg} className='img-fluid' alt={props.two}></img>
        </a>
        <a
          id='projlinks'
          href={props.twoRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>

      <div className='projects '>
        <h1><a id='projlinks' href={props.threeLive}>{props.three}</a></h1>
        <a href={props.threeLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.threeImg} className='img-fluid' alt={props.three}></img>
        </a>
        <a
          id='projlinks'
          href={props.threeRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>

      <div className='projects'>
        <h1><a id='projlinks' href={props.fourLive}>{props.four}</a></h1>
        <a href={props.fourLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.fourImg} className='img-fluid' alt={props.four}></img>
        </a>
        <a
          id='projlinks'
          href={props.fourRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>

      <div className='projects'>
        <h1><a id='projlinks' href={props.fiveLive}>{props.five}</a></h1>
        <a href={props.fiveLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.fiveImg} className='img-fluid' alt={props.five}></img>
        </a>
        <a
          id='projlinks'
          href={props.fiveRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo Link
        </a>
      </div>

      <div className='projects'>
        <h1><a id='projlinks' href={props.sixLive}>{props.six}</a></h1>
        <a href={props.sixLive} target='_blank' rel='noopener noreferrer'>
          <img src={props.sixImg} className='img-fluid' alt={props.six}></img>
        </a>
        <a
          id='projlinks'
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