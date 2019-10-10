import React, { useState, useEffect } from 'react';
import Event from './Event';

//macro for setting max length of array
const MAX_LEN = 49;

function Events({ data, paginationData }){

    const [pageList, setPageList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [listLength , setListLength] = useState(0);

    const numberPerPage = 4;

    //component did mount
    //loadList when component first mounts
    useEffect(() => {
        console.log('data', data);
        setLength();
        loadList();
    }, []);

    //load new page on currentPage change
    useEffect(() => {
    loadList();
    }, [currentPage]);

    
    //get new data if (data) props changes
    useEffect(() => {
        let begin = ((currentPage - 1) * numberPerPage);
        let end = begin + numberPerPage;
        const newData = data.slice(begin,end);
        setPageList(newData);
    },[data]);

    //result: listLength hook is updated
    const setLength = () => {
        //object count gives the total number of items
        //data returned from api request has array max of 49 objects
        //if we have more than 49 items, set the max to 49
        if((paginationData.object_count) > MAX_LEN){
            setListLength(MAX_LEN);    
        }
        else{
            setListLength(paginationData.object_count);
        }
    }

    //method to return number of pages
    const getNumberOfPages = () => {
        return Math.ceil(listLength / numberPerPage);
    }

    //set page to first
    //result: currentPage hook is updated
    const firstPage = () => {
        setCurrentPage(1);
        loadList();
    }

    //increment page by 1
    //result: currentPage hook is updated
    const nextPage = (current) => {
        //if we are last page - do nothing      
        if(current === getNumberOfPages())
            return;
        else{
            setCurrentPage(current + 1);
        }
    }

    //decrement page by 1
    //result: currentPage hook is updated
    const prevPage = (current) => {
        //if we are in first page - do nothing
        if(current === 1){
            return;
        }
        else{
            setCurrentPage(current - 1);
        }
    }

    //go to last page
    //result: currentPage hook is updated
    const lastPage = () => { 
        setCurrentPage(getNumberOfPages());
    }

    //method to load new list
    //result: pageList hook is updated
    const loadList = () => {
        let begin = ((currentPage - 1) * numberPerPage);
        let end = begin + numberPerPage;
        const newData = data.slice(begin,end);
        setPageList(newData);
    }

    const eventItems = pageList.map((event, key) => {        
        return(
            <div key={key}>
                <Event event={event}/>
            </div>
        )
    });

    return(
        <div>
            {pageList.length > 0
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
                onClick={()=>prevPage(currentPage)}>Previous</button>
            <button 
                className='f6 link dim ph3 pv2 mb2 dib white bg-black'
                onClick={()=>nextPage(currentPage)}>Next</button>
            <button
                className='f6 link dim ph3 pv2 mb2 dib white bg-black'
                onClick={()=>lastPage()}>Last</button>
        </div>
    )
}

export default Events;


//Pagination data and calculations source: 
//https://www.thatsoftwaredude.com/content/6125/how-to-paginate-through-a-collection-in-javascript