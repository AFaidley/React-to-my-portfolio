import React from 'react';
import { NavLink } from 'react-router-dom'


function Navbar() {
let color = {
    active: {
        color: '#85756e'
    },
}

// Navbar links used NavLinks so that I can change color when active
    return (
        <nav className='navbackground list-group'>
            <ul>
                <li className='list-group-item'> <NavLink id='nav' to='/React-to-my-portfolio/#/React-to-my-portfolio' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>About Me</NavLink></li>
                <li className='list-group-item'> <NavLink id='nav' to='/Projects' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>Projects</NavLink></li>
                <li className='list-group-item'> <NavLink id='nav' to='/Contact' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>Contact Me</NavLink></li>
                <li className='list-group-item'> <NavLink id='nav' to='/Resume' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>Resume</NavLink></li>
            </ul>
        </nav>
    )
};
export default Navbar;