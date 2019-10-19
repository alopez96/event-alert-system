import React from 'react';
import './../App.css';

function CityInput({ city, updateCity }) {
    

    return(
        <div className='db mt3'>
            <label className='db fw4 lh-copy f3'>Enter city</label>
            <input className='b pa2 input-reset ba city-input' value={city} 
            onChange={e => updateCity(e.target.value)}></input>
        </div>
    )
}

export default CityInput;