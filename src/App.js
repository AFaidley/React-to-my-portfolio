import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import myPic from './img/me.jpg';
import React from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Projects from './components/Projects';

function App() {

 

  return (
    <Router className="App">

    <Header className="App-header"/>
    <Projects />
      <Routes>
        <Route exact path='/' element={<AboutMe />} />

        <Route exact path='/Portfolio' element={<Portfolio />} />

      
      </Routes>
    {/* <AboutMe myPic={myPic}/> */}
    <Footer />
    </Router>
  );
}

export default App;
