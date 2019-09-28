import React from 'react';

function Event ({ event }) {

    return(
        <div>
            {event.description.text}
        </div>
    )
}

export default Event;