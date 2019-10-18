import React from 'react';
import './../App.css';

function Event ({ event }) {

    const openPage = () => {
        window.open(event.url, '_blank')
    }

    return(
        <div>
            <article className="br2 h-100 ba bg--light-blue b--white-10 mv4 w-50 w-50-m mw8 shadow-5 center">
            <div className="pv2 ph3">
                <h1 className="f2 ttu tracked">
                    {event.name.text}
                </h1>
            </div>
            <div className="pa3">
                <div className="lh-title">
                    {event.summary}
                </div>
            </div>
            <div className='dt w-50 center'>
                <div>
                <button className='dtc f5 link dim ph3 pv2 mb2 dib white bg-black' 
                    onClick={()=> openPage()}>
                    Register
                </button>
            </div>
            <div className='dtc'>
                <h6>{event.venue.address.city}</h6>
            </div>
            </div>
            </article>
        </div>
    )
}

export default Event;