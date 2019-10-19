import React from 'react';
import './../App.css';

function categorySelector( {categories, categorySelect} ) {

    const categoryItems = categories.map((item, key) =>
        <option value={item.id} key={key}>{item.name}</option>
    );
    
    return(
        <div>
          {categories.length > 0
          ?<div className='pa4 center db mt3'>
          <label className='db fw4 lh-copy f3 ma2'>Select category</label>
          <select name="categories" 
              className='ma2 category-select pa2 ba measure b'
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