import React, { useState } from 'react';

import radar from './radar1.png';

const Login = () =>{

    const [user, setUser] = useState({
        email: '',
        password: ''
      });
    
    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        console.log(email, password);
    }

    return (
        <div className='card card-lg'>
          <h1 className='mac-header-nbm'>Event</h1>
          <h1 style={{ textAlign: 'center' }}>io</h1>
          <div style={{ width: '30%', margin: '0 auto' }}>
            <img src={radar} alt="Logo" class="center" />
          </div>
          <div style={{ margin: '0 auto' }}>
            <form onSubmit={onSubmit}>
                <div>
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
                    onChange={onChange}
                    required
                    style={{ marginLeft: 'auto' }}
                />
                </div>
                <div>
                <label
                    htmlFor='password'
                    className='login-label'
                >
                    Password:{' '}
                </label>
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                    required
                    style={{ marginLeft: 'auto' }}
                />
                </div>
                <div>
                {/* eslint-disable-next-line */}
                <a href='#'>
                    <input
                    type='submit'
                    value='Login'
                    className='btn btn-primary btn-block'
                    style={{ marginLeft: '16.5rem' }}
                    />
                </a>
                </div>
            </form>
          </div>
        </div>
      );
};

export default Login;