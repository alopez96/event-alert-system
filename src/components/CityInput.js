import React from 'react';

function CityInput({ city, updateCity }) {
    

    return(
        <div>
            <label>Enter city</label>
            <input value={city} onChange={e => updateCity(e.target.value)}></input>
        </div>
    )
}

export default CityInput;