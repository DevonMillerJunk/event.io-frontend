import React from 'react';

const Event = event => {

    const { title, description, timeline } = event.event;
    console.log(event);
    // Make cards smaller
    return (
        <div className='card-sm card-md:hover' style={{ backgroundColor: 'white' }}>
            <h1 className='font-effect-shadow-multiple' style={{ fontWeight: 'bolder', color: '#032275', fontSize: '2.2rem' }}>{title}</h1>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bolder' }} className='' >{description}</p>
        </div>
    );
}

export default Event;