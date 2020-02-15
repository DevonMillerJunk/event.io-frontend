import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Register = () => {
  const [question, setQuestion] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const { email, name, username, password, confirmPassword } = question;

  const onChange = e =>
    setQuestion({ ...question, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      //   Will be an alert
      return console.log('Please enter the same password twice.');
    } else if (
      email === '' ||
      name === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      console.log('Please fill out all fields.');
    }// } else if (username) {
    //   register({
    //     email,
    //     name,
    //     username,
    //     password
    //   });
    // } else {
    //   register({
    //     email,
    //     name,
    //     password
    //   });
    // }
  };

  // if (!isAuthenticated) {
    return (
      <div className='card card-lg'>
        <h2 style={{ fontSize: '2rem' }}>Welcome to</h2>
        <h1 className='mac-header-nbm'>Event</h1>
        <h1 className='mac-header-nbm'>.io</h1>
        <form onSubmit={onSubmit}>
          <label
            htmlFor='email'
            className='login-label'
            style={{ marginLeft: '16.5rem' }}
          >
            Email:
          </label>
          <input
            type='email'
            name='email'
            value={email}
            placeholder='john@gmail.com'
            onChange={onChange}
            required
            style={{ marginLeft: '16.5rem' }}
          />
          <label
            htmlFor='name'
            className='login-label'
            style={{ marginLeft: '16.5rem' }}
          >
            Name:
          </label>
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Johnny Appleseed'
            onChange={onChange}
            required
            style={{ marginLeft: '16.5rem' }}
          />
          <label
            htmlFor='username'
            className='login-label'
            style={{ marginLeft: '16.5rem' }}
          >
            Username:
          </label>
          <input
            type='text'
            name='username'
            value={username}
            placeholder='(Optional - Will just be set to your name if none entered.)'
            onChange={onChange}
            style={{ marginLeft: '16.5rem' }}
          />
          <label
            htmlFor='email'
            className='login-label'
            style={{ marginLeft: '16.5rem' }}
          >
            Password:
          </label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            style={{ marginLeft: '16.5rem' }}
          />
          <label
            htmlFor='email'
            className='login-label'
            style={{ marginLeft: '16.5rem' }}
          >
            Confirm Password:
          </label>
          <input
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={onChange}
            required
            style={{ marginLeft: '16.5rem' }}
          />
          <input
            type='submit'
            value='Register'
            className='btn btn-primary btn-block'
            style={{ marginLeft: '16.5rem' }}
          />
        </form>
      </div>
    );
    //   } else {
//     return <Redirect to='/' />;
//   }
};

export default Register;
