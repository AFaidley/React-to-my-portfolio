import React from 'react';
import { NavLink } from 'react-router-dom'


function Navbar(props) {
let color = {
    active: {
        backgroundColor: "green"
    },
}

    return (
        <nav className="App">
            <ul>
                <li> <NavLink to='/' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>About Me</NavLink></li>
                <li> <NavLink to='/Projects' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>Projects</NavLink></li>
                <li> <NavLink to='/Contact' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>Contact Me</NavLink></li>
                <li> <NavLink to='/Resume' style={({ isActive }) => ({
          ...(isActive ? color.active : null),
        })}>Resume</NavLink></li>
            </ul>
        </nav>
    )
};
export default Navbar;