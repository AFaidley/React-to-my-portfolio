import React from 'react';
import Github from '../img/GithubIcon.png';
import LinkedIn from '../img/LI-Icon.png';
import StackOverFlow from '../img/download.png';

function Footer() {
  return (
    <footer className='App-footer text-center'>
      <a href='https://github.com/AFaidley'>
        <img src={Github} alt='Github'></img>
      </a>
      <a href='https://www.linkedin.com/in/alviva-faidley-a6261823b/'>
        <img src={LinkedIn}></img>
      </a>
      <a href='https://stackoverflow.com/users/17968793/afaidley'>
        <img src={StackOverFlow}></img>
      </a>
    </footer>
  );
}

export default Footer;
