import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import CategorySelector from './components/CategorySelector';
import CityInput from './components/CityInput';
import SearchEvent from './components/SearchEvent';

function App() {

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [ city, setCity ] = useState('');

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

  const categorySelect = (value) => {
    setCategory(value)
  }

  const updateCity = (value) => {
    setCity(value)
}

  return (
    <div className="App-header">
        <Header/>
        <CategorySelector categories={categories} categorySelect={categorySelect}/>
        <CityInput city={city} updateCity={updateCity}/>
        <SearchEvent category={category} city={city}/>
    </div>
  );
}

export default App;
