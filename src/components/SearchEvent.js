import React from 'react';
import axios from 'axios';

function SearchEvent( {category, city} ) {
    
    const searchClick= () => {
        console.log('seach', category, city)
        axios.get(`http://localhost:3000/events`, {
             category_id: category, location: city
        }).then(response => {
            if(response.status === 200){
                console.log('response', response.data)                
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