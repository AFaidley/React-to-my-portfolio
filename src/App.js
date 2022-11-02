import logo from './logo.svg';
import './App.css';
import myPic from './img/me.jpg'

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
          {/* Note to me- Change to My Work */}
          <a className= 'list'>Portfolio</a>
          <a className= 'list'>Contact</a>
          <a className= 'list'>Resume</a>
        </nav>
      <h1>Hi, I'm Alviva. Welcome to my Portfolio!</h1>
  
      </header>
     <div className= 'container'></div>
     <footer>Made with 💗 by Alviva</footer>
    </div>
  );
}

export default App;
