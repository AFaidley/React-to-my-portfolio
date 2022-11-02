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
        </div>
    );
}

export default Contact;