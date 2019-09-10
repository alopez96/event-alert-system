import React from 'react';

function categorySelector( {categories, categorySelect} ) {

    const categoryItems = categories.map((item, key) =>
        <option value={item.id} key={key}>{item.name}</option>
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