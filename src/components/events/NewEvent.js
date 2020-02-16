import React, { useState } from 'react';
import radar from '../auth/radar.png';

const NewEvent = () => {
    const [event, setEvent] = useState({
        title: '',
        description: '',
        location: '',
        time: {
            startTime: '',
            endTime: ''
        }
      });
    
      const { title, description, location, time } = event;
      const { startTime, endTime } = time;

      const onChange = e =>
        setEvent({ ...event, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        if (
          title === '' ||
          description === '' ||
          location === '' ||
          startTime === '' ||
          endTime === ''
        ) {
          console.log('Please fill out all fields.');
        }else {
          console.log(title, description, location, startTime, endTime);
        }
      };

    return (
          <div className='card-ext card-lg'>
                <div style={{ textAlign: 'center' }}>
                    <h1 className='font-effect-shadow-multiple' style={{ fontSize: '4.5rem', fontWeight: 'bolder', color: '#032275' }}>Event.io</h1>
                </div>
            <div className='grid-hor'>
                <div style={{ maxWidth: '20vw', textAlign: 'center' }}>
                  <img src={radar} style={{ maxWidth: '70%', padding: '0 0 10rem' }} alt="Logo"/>
                </div>
                <div>
                    <div style={{ textAlign: 'right' }}>
                        <label
                            htmlFor='name'
                            className='login-label'
                            style={{ textAlign: 'right' }}
                        >
                            Title
                        </label>
                        <input
                            type='text'
                            name='name'
                            value={title}
                            placeholder='Johnny Appleseed'
                            onChange={onChange}
                            required
                            style={{ marginLeft: 'auto', textAlign: 'right' }}
                        />
                        <label
                            htmlFor='email'
                            className='login-label'
                            style={{ textAlign: 'right' }}
                        >
                            Description
                        </label>
                        <input
                            type='password'
                            name='description'
                            value={description}
                            onChange={onChange}
                            required
                            style={{ marginLeft: 'auto', textAlign: 'right' }}
                        />
                        <label
                            htmlFor='email'
                            className='login-label'
                            style={{ textAlign: 'right' }}
                        >
                            Location
                        </label>
                        <input
                            type='password'
                            name='description'
                            value={location}
                            onChange={onChange}
                            required
                            style={{ marginLeft: 'auto', textAlign: 'right' }}
                        />
                        <label
                            htmlFor='email'
                            className='login-label'
                            style={{ textAlign: 'right' }}
                        >
                            Start Time
                        </label>
                        <input
                            type='email'
                            name='startTime'
                            value={startTime}
                            onChange={onChange}
                            required
                            style={{ marginLeft: 'auto', textAlign: 'right' }}
                        />
                        <label
                            htmlFor='email'
                            className='login-label'
                            style={{ textAlign: 'right' }}
                        >
                            End Time
                        </label>
                        <input
                            type='email'
                            name='endTime'
                            value={endTime}
                            onChange={onChange}
                            required
                            style={{ marginLeft: 'auto', textAlign: 'right' }}
                        />
                    </div>
                    <div style={{ verticalAlign: 'center' }}>
                        <div style={{ textAlign: 'right' }}>
                            <form onSubmit={onSubmit}>
                                <a href='#'>
                                    <input
                                    type='submit'
                                    value='Submit'
                                    className='btn btn-block btn-primary'
                                    style={{ marginLeft: 'auto', width: '5vw' }}
                                    />
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      );
}

export default NewEvent;