import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import host from './server';

import Header from './components/Header';
import CategorySelector from './components/CategorySelector';
import CityInput from './components/CityInput';
import SearchEvent from './components/SearchEvent';
import Events from './components/Events';

import { Spinner } from 'react-bootstrap';

function App() {
  
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [ city, setCity ] = useState('');
  const [ data, setData ] = useState([]);
  const [ paginationData, setPagination ] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

  //We only want to fetch data when the component mounts. 
  //That’s why we provide an empty array as second argument 
  //similar to componentDidMount
  useEffect(() => {
    //get list of categories
    axios.get(`${host}/categories`)
    .then(response => {
        if(response.status === 200){
            setCategories(response.data)
            setisLoaded(true);
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

  const updateData = (value) => {
    setData(value)
  }

  const updatePagination = (value) => {    
    setPagination(value)
  }

  const updateDataFetched = (value) => {
    console.log('data fetched', value)
    setDataFetched(value);
  }

  return (
    <div className="App-header">
        <Header/>
        {isLoaded == false
        ?<Spinner animation="border" variant="primary" className="center"/> 
        :<CategorySelector categories={categories} categorySelect={categorySelect}/>
        }
        {category.length > 0
        ?<CityInput city={city} updateCity={updateCity}/>
        : null}
        {city.length > 0
        ?
        <SearchEvent category={category} city={city} updateDataFetched={updateDataFetched}
          updateData={updateData}
          updatePagination={updatePagination}/>
        : null}
        {data.length > 0
        ?<div>
          <Events data={data} paginationData={paginationData}/>
        </div>
        : <div>
        {dataFetched === true
        ? <Spinner animation="border" variant="primary" className="center"/> 
        :null}
        </div>
         }
        
    </div>
  );
}

export default App;
