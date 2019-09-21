import React, { useEffect } from 'react';

function Event({ data }){

    useEffect(() => {
        console.log('event', data)
      });


    return(
        <div>
            <p></p>
        </div>
    )
}

export default Event;