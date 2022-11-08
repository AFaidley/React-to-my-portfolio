import React from 'react';
import Github from '../img/GithubIcon.png';
import LinkedIn from '../img/LI-Icon.png';
import StackOverFlow from '../img/download.png';

function Footer() {
  return (
    // Imgs are a tags and link to the website
    <footer className='App-footer text-center'>
      <a href='https://github.com/AFaidley'>
        <img id= 'github' src={Github} alt='Github'></img>
      </a>
      <a href='https://www.linkedin.com/in/alviva-faidley-a6261823b/'>
        <img id= 'linkedin' src={LinkedIn}></img>
      </a>
      <a href='https://stackoverflow.com/users/17968793/afaidley'>
        <img id= 'stack' src={StackOverFlow}></img>
      </a>
    </footer>
  );
}

export default Footer;
