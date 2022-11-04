import React from 'react';

function Resume() {
    return (
        <div>
            <h1><a href='#'>Resume</a></h1>
            
            <h3>Front-end Proficiencies</h3>
            <ul className='list-group'>
                <li className='list-group-item'>HTML</li>
                <li className='list-group-item'>CSS</li>
                <li className='list-group-item'>JavaScript</li>
                <li className='list-group-item'>Responsive Design</li>
                <li className='list-group-item'>JQuery</li>
                <li className='list-group-item'>Bootstrap</li>
                <li className='list-group-item'>React</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul className='list-group'>
                <li className='list-group-item'>APIs</li>
                <li className='list-group-item'>Node</li>
                <li className='list-group-item'>Express</li>
                <li className='list-group-item'>MySQL, Sequelize</li>
                <li className='list-group-item'>REST</li>
                <li className='list-group-item'>MongoDB, Mongoose</li>
                <li className='list-group-item'>GraphQL</li>
            </ul>
        </div>
    );
}

export default Resume;