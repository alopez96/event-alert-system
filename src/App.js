import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import host from './server';

import Header from './components/Header';
import CategorySelector from './components/CategorySelector';
import CityInput from './components/CityInput';
import SearchEvent from './components/SearchEvent';
import Events from './components/Events';

import { Spinner, Alert } from 'react-bootstrap';

function App() {
  
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [ city, setCity ] = useState('');
  const [ data, setData ] = useState([]);
  const [ paginationData, setPagination ] = useState([]);
  const [isLoadedCateg, setisLoadedCateg] = useState(false);
  const [isLoadingData, setisLoadingData] = useState(false);
  const [errorMessage, setErrorMessage] = useState(200);

  //We only want to fetch data when the component mounts. 
  //That’s why we provide an empty array as second argument 
  //similar to componentDidMount
  useEffect(() => {
    //get list of categories
    axios.get(`${host}/categories`)
    .then(response => {
        if(response.status === 200){
            setCategories(response.data)
            setisLoadedCateg(true);
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

  const updatePagination = (value) => {    
    setPagination(value)
  }

  //set data to [] and update isLoadingData to true
  //result: show spinner (until we get response from SerachEvent.js api call
  //and we trigger updateData function above)
  const updateData = (data, isLoading) => {
    setData(data);
    setisLoadingData(isLoading);
  }

  const updateError = (status) => {
    setErrorMessage(status);
  }

  return (
    <div className="App-header">
        <Header/>
        {isLoadedCateg === false
        ?<Spinner animation="border" variant="primary" className="center"/> 
        :<CategorySelector categories={categories} categorySelect={categorySelect}/>
        }
        {category.length > 0
        ?<CityInput city={city} updateCity={updateCity}/>
        : null}
        {city.length > 0
        ?
        <SearchEvent category={category} city={city} 
          updateData={updateData}
          updatePagination={updatePagination}
          updateError={updateError}/>
        : null}
        {data.length > 0
        ?<div>
          <Events data={data} paginationData={paginationData}/>
        </div>
        : <div>
        {isLoadingData === true
        ? <Spinner animation="border" variant="primary" className="center"/> 
        : <div className='mt2'>
          {errorMessage > 200
          ?<Alert variant='danger'>Error Fetching Data</Alert>
          :null}
        </div>
        }
        </div>
         }
        
    </div>
  );
}

export default App;
