import React from 'react';
import axios from 'axios';

function SearchEvent( {category, city, updateData} ) {
    
    const searchClick= () => {
        console.log('search', city, category)
        axios.get(`http://localhost:3000/events/${category}&${city}`)
        .then(response => {
            if(response.status === 200){
                //pagination info
                console.log('pagination', response.data.pagination)
                updateData(response.data.events)                
            }
        }).catch(err => {
            console.log('error', err)
        })
    }

    return(
        <div>
            <button onClick={()=>searchClick()}>Search</button>
        </div>
    )
}

export default SearchEvent;