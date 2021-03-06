import React from 'react';
import axios from 'axios';
import host from './../server';

function SearchEvent( {category, city, updateData,
                     updatePagination, updateError} ) {
    
    const searchClick= () => {
        console.log('search', city, category)

        //set data to [] and isLoadingData to true
        //result: parent: App.js will show spinner
        updateData([], true);

        axios.get(`${host}/events/${category}&${city}`)
        .then(response => {
            if(response.status === 200){
                //pagination info
                updatePagination(response.data.pagination)
                updateData(response.data.events, false)                
            }
        }).catch(err => {
            updateData([],false)   
            updateError(err.response.status)
            console.log('error', err)
        })
    }

    return(
        <div>
            <button className='f4 link dim ph3 pv2 mt4 mb4 dib center white bg-dark-blue' 
                onClick={()=>searchClick()}>
                Search
            </button>
        </div>
    )
}

export default SearchEvent;