import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import radar from './radar1.png';
import { Link } from 'react-router-dom';

const Register = () => {
  const [question, setQuestion] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  });

  const { email, name, password, confirmPassword } = question;

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
    }else {
      console.log(email, name, password);
    }
  };

  // if (!isAuthenticated) {
    return (
        <div className='card-norm card-nh card-lg'>
            <div className='grid-hor'>
                <div style={{ textAlign: 'left' }}>
                    <h1 className='font-effect-shadow-multiple' style={{ fontSize: '4.5rem', fontWeight: 'bolder', color: '#032275' }}>Event.io</h1>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <label
                        htmlFor='email'
                        className='login-label'
                        style={{ marginLeft: 'auto', textAlign: 'right' }}
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
                        style={{ marginLeft: 'auto', textAlign: 'right' }}
                    />
                </div>
            </div>
            <div className='grid-hor'>
                <div style={{ maxWidth: '20vw', textAlign: 'center' }}>
                  <img src={radar} style={{ maxWidth: '70%' }} alt="Logo"/>
                </div>
            
                <div style={{ verticalAlign: 'center' }}>
                  <div style={{ textAlign: 'right' }}>
                  <form onSubmit={onSubmit}>
                    
                    <label
                        htmlFor='name'
                        className='login-label'
                        style={{ marginLeft: 'auto' }}
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
                        style={{ marginLeft: 'auto', textAlign: 'right' }}
                    />
                    <label
                        htmlFor='email'
                        className='login-label'
                        style={{ marginLeft: 'auto' }}
                    >
                        Password:
                    </label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        required
                        style={{ marginLeft: 'auto' }}
                    />
                    <label
                        htmlFor='email'
                        className='login-label'
                        style={{ marginLeft: 'auto' }}
                    >
                        Confirm Password:
                    </label>
                    <input
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={onChange}
                        required
                        style={{ marginLeft: 'auto' }}
                    />
                    <div className='grid-hor'>
                            <Link to='/login'>
                                <input
                                type='submit'
                                value='Login'
                                className='btn btn-block btn-primary'
                                style={{ marginLeft: 'auto', width: '5vw', backgroundColor: 'lightgray', color: 'black' }}
                                />
                            </Link>
                            <a href='#'>
                                <input
                                type='submit'
                                value='Register'
                                className='btn btn-block btn-primary'
                                style={{ marginLeft: 'auto', width: '5vw' }}
                                />
                            </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      );
};

export default Register;
