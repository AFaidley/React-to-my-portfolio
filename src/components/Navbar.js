import React from 'react';
import { NavLink } from 'react-router-dom'


function Navbar(props) {
let color = {
    active: {
        backgroundColor: 'green'
    },
}

// Navbar links used NavLinks so that I can change color when active
    return (
        <nav className='list-group '>
            <ul>
                <li className='list-group-item'> <NavLink to='/' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>About Me</NavLink></li>
                <li className='list-group-item'> <NavLink to='/Projects' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>Projects</NavLink></li>
                <li className='list-group-item'> <NavLink to='/Contact' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>Contact Me</NavLink></li>
                <li className='list-group-item'> <NavLink to='/Resume' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>Resume</NavLink></li>
            </ul>
        </nav>
    )
};
export default Navbar;