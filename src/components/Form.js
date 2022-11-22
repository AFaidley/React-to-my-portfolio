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
        setMessage(inputValue);
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
    setErrorMessage('');
  };

  // function onMouseOut() {
  //   alert('Text is required!')
  // };

  return (
    <div className='mb-3 formbg'>
      {/* <form className='form'>
        <input
          className='w-50 formfield'
          // onMouseOut={onMouseOut}
          value={name}
          name='name'
          onChange={handleInputChange}
          type='text'
          placeholder='Name'
        />
        <input
          className='w-50 formfield'
          // onMouseOut={onMouseOut}
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='Email'
        />
        <textarea
          className='w-50 formfield message'
          // onMouseOut={onMouseOut}
          rows='5'
          value={message}
          name='message'
          onChange={handleInputChange}
          type='message'
          placeholder='Message'
        />
        <button className='btn btn-outline-secondary' type='button' onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )} */}
      <div className='contact'>
      <p>Reach out if you have any further questions or just want to say hi!</p>
      <p>Feel free to shoot me a message on my Linkedin, which is found in the bottom of the page- so easy!</p>
      <p>You can also use the following methods of contact:</p>
      <p>Email: alviva.faidley@gmail.com</p>
      <p>Phone: (605)-209-0341</p>
      </div>
    </div>
  );
}

export default Form;
