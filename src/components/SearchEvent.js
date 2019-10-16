import React from 'react';
import axios from 'axios';
import host from './../server';

function SearchEvent( {category, city, updateData, updatePagination} ) {
    
    const searchClick= () => {
        console.log('search', city, category)
        axios.get(`${host}/events/${category}&${city}`)
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
            <button className='f6 link dim ph3 pv2 mt2 mb2 dib center white bg-purple' 
                onClick={()=>searchClick()}>
                Search
            </button>
        </div>
    )
}

export default SearchEvent;