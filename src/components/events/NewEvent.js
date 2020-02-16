import React, { useState, useContext } from 'react';
import radar from '../auth/radar.png';

import EventContext from '../../context/event/eventContext';
import AuthContext from '../../context/auth/authContext';

const NewEvent = () => {
    const [event, setEvent] = useState({
        title: '',
        description: '',
        lat: '',
        long: '',
        startTime: '',
        endTime: ''
      });

      const eventContext = useContext(EventContext);
      const authContext = useContext(AuthContext);

      const { createEvent } = eventContext;
      const { user } = authContext;
    
      const { title, description, lat, long, startTime, endTime } = event;

      const onChange = e =>
        setEvent({ ...event, [e.target.name]: e.target.value });
    
      const onSubmit = e => {
        e.preventDefault();
        if (
          title === '' ||
          description === '' ||
          lat === '' ||
          long === '' ||
          startTime === '' ||
          endTime === '' 
        ) {
          console.log('Please fill out all fields.');
        }else {
            let FormData = {
                title: title,
                description: description,
                ownerId: user._id,
                location: {
                    lat: lat,
                    long: long
                },
                time: {
                    starTime: startTime,
                    endTime: endTime
                }
            }
            createEvent(FormData);
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
                            name='title'
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
                            type='email'
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
                            Latitude
                        </label>
                        <input
                            type='email'
                            name='lat'
                            value={lat}
                            onChange={onChange}
                            required
                            style={{ marginLeft: 'auto', textAlign: 'right' }}
                        />
                        <label
                            htmlFor='email'
                            className='login-label'
                            style={{ textAlign: 'right' }}
                        >
                            Longitude
                        </label>
                        <input
                            type='email'
                            name='long'
                            value={long}
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