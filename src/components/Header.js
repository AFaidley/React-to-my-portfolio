import React from 'react';
import Navbar from './Navbar';
import AboutMe from '../pages/AboutMe';
import Projects from './Projects';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function Header() {
    return (
    <div className="App">
        <h1>Hi, I'm Alviva. Welcome to my Portfolio!</h1>
        <Navbar about={<AboutMe />} projects={<Projects />} contact={<Contact />} resume={<Resume />}/>
    </div>
    )
};
export default Header;