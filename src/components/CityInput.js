import React from 'react';

function CityInput({ city, updateCity }) {
    

    return(
        <div>
            <label className='ma2'>Enter city</label>
            <input className='ma2' value={city} 
            onChange={e => updateCity(e.target.value)}></input>
        </div>
    )
}

export default CityInput;