import React, { useState, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link, Redirect } from 'react-router-dom';

import radar from './radar1.png';

const Login = () => {
    const authContext = useContext(AuthContext);

    const { login, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    
    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
        console.log('Please fill in all fields');
        } else {
            login({
                email,
                password
            });
        }
    }
    if(!isAuthenticated){
      return (
        <div className='card card-nh'>
            <div className='grid-hor'>
                <div style={{ textAlign: 'left' }}>
                    <h1 className='text-primary' style={{ fontSize: '3.5rem', font: 'Candal', fontWeight: 'bolder' }}>Event.io</h1>
                    <h1 style={{ color: 'darkgray' }}>Saving you time when you need it most</h1>
                </div>
                <div>
                    
                </div>
            </div>
            <div className='grid-hor'>
                <div style={{ maxWidth: '20vw', textAlign: 'center' }}>
                  <img src={radar} style={{ maxWidth: '70%' }} alt="Logo"/>
                </div>
            
                <div style={{ verticalAlign: 'center' }}>
                  <div style={{ textAlign: 'right' }}>
                    <form onSubmit={onSubmit}>
                        <div>
                        <label
                            htmlFor='email'
                            className='login-label'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={onChange}
                            required
                            style={{ marginLeft: 'auto', width: '14vw' }}
                        />
                        </div>
                        <div>
                        <label
                            htmlFor='password'
                            className='login-label'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={onChange}
                            required
                            style={{ marginLeft: 'auto', width: '14vw' }}
                        />
                        </div>
                        <div>
                        {/* eslint-disable-next-line */}
                        <div className='grid-hor'>
                            <Link to='/register'>
                                <input
                                type='submit'
                                value='Register'
                                className='btn btn-block'
                                style={{ marginLeft: 'auto', width: '5vw', backgroundColor: 'lightgray' }}
                                />
                            </Link>
                            <a href='#'>
                                <input
                                type='submit'
                                value='Login'
                                className='btn btn-primary btn-block'
                                style={{ marginLeft: 'auto', width: '5vw' }}
                                />
                            </a>
                        </div>
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
      );
    } else {
        return <Redirect to='/' />;
    }
};

export default Login;