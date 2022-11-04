import React, { useState } from 'react';
import '../App.css';
// Uses validate func from helper
import { validateEmail } from '../utils/helpers';

function Form() {
  // State vars for form and initial val is empty
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Val and name of e
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state to name, email or msg
    if (inputType === 'name') {
        setName(inputValue);
    } else if (inputType === 'email') {
        setEmail(inputValue);
    } else {
        setMessage(inputValue === 'message');
    }
  };

  const handleFormSubmit = (e) => {
    // Prevents refresh before input is taken
    e.preventDefault();

    // Error msg if email is incorrect
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    // Clears input after succesful submit
    setName('');
    setEmail('');
    setMessage('');
  };

  // function onMouseOut() {
  //   alert('Text is required!')
  // };
  
  return (
    <div className= 'mb-3 formbg'>
      
      <form className="form">
          <input
          className='form-label'
            // onMouseOut={onMouseOut}
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
        <input
          // onMouseOut={onMouseOut}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          // onMouseOut={onMouseOut}
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;