import React from 'react';

function CityInput({ city, updateCity }) {
    

    return(
        <div className='w-100 dt'>
            <label className='ma2 dtc'>Enter city</label>
            <input className='ma2 dtc' value={city} 
            onChange={e => updateCity(e.target.value)}></input>
        </div>
    )
}

export default CityInput;