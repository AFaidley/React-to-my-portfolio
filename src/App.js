import './App.css';
import myPic from './img/me.jpg';
import React from 'react';
import AboutMe from './pages/AboutMe';

// className="App-logo"
/* <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
  >
  Learn React
</a> */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a className= 'list'>About Me</a>
          {/* Note to myself- Change to My Work */}
          <a className= 'list'>Portfolio</a>
          <a className= 'list'>Contact</a>
          <a className= 'list'>Resume</a>
        </nav>
      </header>
<AboutMe myPic={myPic}/>
     <footer>Made with <span>💗</span> by Alviva</footer>
    </div>
  );
}

export default App;
