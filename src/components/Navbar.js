import React from 'react';
import { Link, NavLink } from 'react-router-dom'


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
                <li> <NavLink to='/Portfolio'>Projects</NavLink></li>
                <li> <a href={props.contact}>Contact Me</a></li>
                <li> <a href={props.resume}>Resume</a></li>
            </ul>
        </nav>
    )
};
export default Navbar;