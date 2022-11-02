import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './components/Projects';

function App() {

 

  return (
    <Router className="App">
    <Header className="App-header"/>
      <Routes>
        <Route exact path='/' element={<AboutMe />} />
        <Route exact path='/Projects' element={<Projects />} />
        <Route exact path='/Contact' element={<Contact />} />
        <Route exact path='/Resume' element={<Resume />} />
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;
