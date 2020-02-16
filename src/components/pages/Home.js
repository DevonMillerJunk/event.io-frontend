import React from 'react';
import Event from '../events/Event';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

const Home = () =>{
    const events = [{
            title: "HacktheValley", 
            description: "Hackathon hosted by UofT Scarborough campus. Join 500 others in hacking for 36 hours...",
            timeline: {
                startTime: Date('February 14th, 2019 23:00'),
                endTime: Date('February 16th, 2019 17:00')
            }
            
        }, 
        {
            title: "HacktheNorth",
            description: "Hackathon hosted by University of Waterloo. Join 500 others in hacking for 36 hours...",
            timeline: {
                startTime: Date('February 14th, 2019 23:00'),
                endTime: Date('February 16th, 2019 17:00')
            }
        },
        {
            title: "Maple Leafs vs. Canadians",
            description: "Maple Leafs game",
            timeline: {
                startTime: Date('February 14th, 2019 23:00'),
                endTime: Date('February 16th, 2019 17:00')
            }
        }
    ];
    const userEvents = [{
        title: "HacktheValley", 
        description: "Hackathon hosted by UofT Scarborough campus. Join 500 others in hacking for 36 hours...",
        timeline: {
            startTime: Date('February 14th, 2019 23:00'),
            endTime: Date('February 16th, 2019 17:00')
        }
        
    }, 
    {
        title: "HacktheNorth",
        description: "Hackathon hosted by University of Waterloo. Join 500 others in hacking for 36 hours...",
        timeline: {
            startTime: Date('February 14th, 2019 23:00'),
            endTime: Date('February 16th, 2019 17:00')
        }
    }
];

    const iter8 = events => {
        let table = [];
        for(let i = 0; i < events.length; i++){
            table.push(<Event event={events[i]} />);
        }
        return table;
    };
    

    return(
        <TransitionGroup>
            <div style={{ padding: '0 0 3rem' }}>
                <div className='card-ext card-lg'>
                    <div className='grid-hor'>
                        {iter8(events).map(component => (component))}
                    </div>
                </div>
            </div>
            <div style={{ padding: '0 0 2rem' }}>
                <Link to='/create'>
                    <div className='card-ext card-md'>
                        <div className='grid-hor-f'>
                            <div className='far fa-plus-square' style={{ padding: '0 1rem' }}/>
                            <h1 style={{ fontWeight: 'bolder', fontSize: '2.5rem', textAlign: 'left' }}>Create new Event</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <h1 style={{ fontWeight: 'bolder', fontSize: '2.5rem', marginLeft: '22%' }}>Active Events</h1>
            <div className='card-ext card-lg'>
                <div className='grid-hor'>
                    {iter8(userEvents).map(component => (component))}
                </div>
            </div>
        </TransitionGroup>
    );
};

export default Home;