import React from 'react';
import './../App.css';

function Event ({ event }) {

    return(
        <div>
            <article className="br2 h-100 ba bg--light-blue b--white-10 mv4 w-100 w-50-m mw8 shadow-5 center">
            <div className="pv2 ph3">
                <h1 className="f6 ttu tracked">
                    {event.name.text}
                </h1>
            </div>
            <div className="pa3">
                <div className="lh-title">
                    {event.description.text}
                </div>
            </div>
            </article>
        </div>
    )
}

export default Event;