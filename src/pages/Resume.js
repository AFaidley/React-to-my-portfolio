import React from 'react';

function Resume() {
    return (
        <div className='text-center'>
            <h2 className='text-center mt-5'><a id='resume'  href='#'>View my Resume</a></h2>
            <br></br>
            <br></br>
            <h3>Front-end Proficiencies</h3>
            <ol className='list-group' id='reslist'>
                <li className='list-group-item'>HTML</li>
                <li className='list-group-item'>CSS</li>
                <li className='list-group-item'>JavaScript</li>
                <li className='list-group-item'>Responsive Design</li>
                <li className='list-group-item'>JQuery</li>
                <li className='list-group-item'>Bootstrap</li>
                <li className='list-group-item'>React</li>
            </ol>
            <h3>Back-end Proficiencies</h3>
            <ul className='list-group' id='reslist'>
                <li className='list-group-item'>APIs</li>
                <li className='list-group-item'>Node</li>
                <li className='list-group-item'>Express</li>
                <li className='list-group-item'>MySQL, Sequelize</li>
                <li className='list-group-item'>REST</li>
                <li className='list-group-item'>MongoDB, Mongoose</li>
                <li className='list-group-item'>GraphQL</li>
            </ul>
            <br></br>
            <br></br>
        </div>
    );
}

export default Resume;