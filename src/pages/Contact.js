import React from 'react';

function Contact() {
    return (
        <div className="App">
            <p>github:'https://github.com/AFaidley' </p>
            <p>linkedIn:'https://www.linkedin.com/in/alviva-faidley-a6261823b/'</p>
            <form>
                <ul>
                    <li className="form-item">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="user-name" required></input>
                    </li>
                    <br></br>
                    <li className="form-item">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="user-email" required></input>
                    </li>
                    <br></br>
                    <li className="form-item">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" rows="4"></textarea>
                    </li>
                </ul>
                <br></br>
                <input type="button" value="Send"/>
            </form>

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

export default Contact;