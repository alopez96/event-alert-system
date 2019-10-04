import React from 'react';
import axios from 'axios';

function SearchEvent( {category, city, updateData, updatePagination} ) {
    
    const searchClick= () => {
        console.log('search', city, category)
        axios.get(`http://localhost:3000/events/${category}&${city}`)
        .then(response => {
            if(response.status === 200){
                //pagination info
                updatePagination(response.data.pagination)
                updateData(response.data.events)                
            }
        }).catch(err => {
            console.log('error', err)
        })
    }

    return(
        <div>
            <button className='f6 link dim ph3 pv2 mb2 dib white bg-black' 
                onClick={()=>searchClick()}>
                Search
            </button>
        </div>
    )
}

export default SearchEvent;