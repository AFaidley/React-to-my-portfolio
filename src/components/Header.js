import React from 'react';
import Navbar from './Navbar';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function Header() {
    return (
    <div className="App">
        <h1>Alviva's Portfolio!</h1>
        <Navbar about={<AboutMe />} projects={<Portfolio />} contact={<Contact />} resume={<Resume />}>
        </Navbar>
    </div>
    )
};
export default Header;