import React from 'react';
import './../App.css';

function CityInput({ city, updateCity }) {
    

    return(
        <div className='w-50 center dt'>
            <label className='ma2 dtc'>Enter city</label>
            <input className='ma2 dtc city-input' value={city} 
            onChange={e => updateCity(e.target.value)}></input>
        </div>
    )
}

export default CityInput;