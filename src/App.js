import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  //We only want to fetch data when the component mounts. 
  //That’s why we provide an empty array as second argument 
  //similar to componentDidMount
  useEffect(() => {
    //get list of categories
    axios.get(`http://localhost:3000/categories`)
    .then(response => {
        if(response.status === 200){
            console.log('response', response.data)
            setCategories(response.data)
        }
    })
    .catch( err => {
        if(err.response){
            //the request was made and the server responded with
            //a status code outside the 2xx range
            console.log(err.response.data)
        }
        else if(err.request){
            //request was made but no response was recieved
            console.log(err.request)
        }
        else{
            //something happened in setting up the request and triggered an Error
            console.log('error', err.message)
            console.log(err)
        }   
    })
  }, []);

  const categoryItems = categories.map((item, key) =>
        <option value={item.name} key={key}>{item.name}</option>
  );

  const categorySelect = (value) => {
    console.log('value', value)
    setCategory(value)
  }

  return (
    <div>
      <header className="App-header">
        <p>Don't miss your next great event.</p>
        {categories 
          ? <select name="categories" 
              form="category-form"
              onChange={e => categorySelect(e.target.value)}> 
              {categoryItems}
            </select> 
          : null}
      </header>
    </div>
  );
}

export default App;
