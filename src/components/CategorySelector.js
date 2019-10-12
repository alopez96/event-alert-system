import React from 'react';
import './../App.css';

function categorySelector( {categories, categorySelect} ) {

    const categoryItems = categories.map((item, key) =>
        <option value={item.id} key={key}>{item.name}</option>
    );
    
    return(
        <div>
          {categories.length > 0
          ?<div className='w-50 center dt'>
          <label className='dtc ma2'>Select category</label>
          <select name="categories" className='dtc ma2 category-select'
              form="category-form"
              onChange={e => categorySelect(e.target.value)}> 
              {categoryItems}
            </select> 
            </div>
          : null}
        </div>
    )
}

export default categorySelector;