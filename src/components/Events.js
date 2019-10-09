import React, { useState, useEffect } from 'react';
import Event from './Event';


function Events({ data, paginationData }){

    const [pageList, setPageList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [listLength , setListLength] = useState(0);

    const numberPerPage = 4;

    useEffect(() => {
        console.log('data', data);
        //object count gives the total number of items
        //data returned from api request has array max of 49 objects
        //if we have more than 49 pages, set the max to 49
        if((paginationData.object_count/numberPerPage) > 49){
            setListLength(49);    
        }
        else{
            setListLength(paginationData.object_count);
        }
        loadList();
      }, []);

    const getNumberOfPages = () => {
        return Math.ceil(listLength / numberPerPage);
    }

    const firstPage = () => {
        setCurrentPage(1);
        loadList();
    }

    const nextPage = (current) => {
        //if we are last page - do nothing      
        if(current == getNumberOfPages())
            return;
        else{
            setCurrentPage(current + 1);
            loadList();
        }
    }

    const prevPage = (current) => {
        //if we are in first page - do nothing
        if(current == 1){
            return;
        }
        else{
            setCurrentPage(current - 1);
            loadList();
        }
    }

    const lastPage = () => { 
        setCurrentPage(getNumberOfPages());
        loadList();
    }

    const loadList = () => {
        let begin = ((currentPage - 1) * numberPerPage);
        let end = begin + numberPerPage;
        const newData = data.slice(begin,end);
        setPageList(newData);   
    }

    var eventItems = pageList.map((event, key) => {
        return(
            <div key={key}>
                <Event event={event}/>
            </div>
        )}
    );

    return(
        <div>
            {pageList.length > 0 && currentPage
            ?<div>
                {eventItems}
                {currentPage}
            </div>
            :null}
            <button
                className='f6 link dim ph3 pv2 mb2 dib white bg-black'
                onClick={()=>firstPage()}>First</button>
            <button 
                className='f6 link dim ph3 pv2 mb2 dib white bg-black'
                onClick={()=>nextPage(currentPage)}>Next</button>
            <button 
                className='f6 link dim ph3 pv2 mb2 dib white bg-black'
                onClick={()=>prevPage(currentPage)}>Previous</button>
            <button
                className='f6 link dim ph3 pv2 mb2 dib white bg-black'
                onClick={()=>lastPage()}>Last</button>
        </div>
    )
}

export default Events;


//Pagination data and calculations source: 
//https://www.thatsoftwaredude.com/content/6125/how-to-paginate-through-a-collection-in-javascript