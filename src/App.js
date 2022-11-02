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
      <h1>Hi, I'm Alviva. Welcome to my Portfolio!</h1>
        <img src={myPic} className='mePic' alt="logo" />
      </header>
     <div className= 'container'></div>
     <footer>Made with love by Alviva</footer>
    </div>
  );
}

export default App;
