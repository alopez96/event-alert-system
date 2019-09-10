import React from 'react';
import './App.css';

function categorySelector( {categories, categorySelect} ) {

    const categoryItems = categories.map((item, key) =>
        <option value={item.name} key={key}>{item.name}</option>
    );
    
    return(
        <div>
            {categories 
          ? <select name="categories" 
              form="category-form"
              onChange={e => categorySelect(e.target.value)}> 
              {categoryItems}
            </select> 
          : null}
        </div>
    )
}

export default categorySelector;