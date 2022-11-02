import React from 'react';
import { NavLink } from 'react-router-dom'


function Navbar(props) {
let thing = {
    bing: {
        backgroundColor: "red"
    },

    that: {
        color: "blue",
        
    }
}

    return (
        <nav className="App">
            <ul>
                <li> <NavLink to='/' style={({ isActive }) => ({
          ...(isActive ? thing.bing : null),
        })}>About Me</NavLink></li>
                <li> <NavLink to='/Projects'>Projects</NavLink></li>
                <li> <NavLink to='/Contact'>Contact Me</NavLink></li>
                <li> <NavLink to='/Resume'>Resume</NavLink></li>
            </ul>
        </nav>
    )
};
export default Navbar;