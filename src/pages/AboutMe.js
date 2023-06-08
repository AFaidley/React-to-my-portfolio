import React from 'react';
import myPic from '../img/me.jpg';

function AboutMe() {
  return (
    <section className='body'>
      <div className='text-center body'>
        <h2>About Me</h2>
        <br></br>
        <img src={myPic} className='mePic' alt='me' />
        <p className='aboutMe'>
          How about I tell you a little about myself? I am a Full stack web
          developer with aviation experience within the U.S as well as abroad. I
          recently earned a certificate in full stack web development from the
          University of Denver, with newly developed skills in JavaScript, CSS,
          React.js, MySQL, MongoDB, PWA's, Node and responsive web design. A
          quick problem solver who can achieve deadlines without sacrificing
          quality of work. Due to my background in aviation, I am able to work
          in high pressure and fast paced environments with ease. I possess
          strong leadership qualities as well as interpersonal skills which help
          me to work in a highly collaborative atmosphere. With each project, my
          goal is to develop something that I am proud to call my own while
          maintaining an impactful and smooth user experience.
          <br></br>
          In my spare time you will find me outside with my dogs, gaming or
          creating random apps!
          <br></br>
        </p>
        <p className='aboutMe'>
          If you want any more information about myself or my work, you can
          always reach out and say hi!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
