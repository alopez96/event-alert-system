import React, { useEffect } from 'react';
import Event from './Event';

function Events({ data, paginationData }){

    useEffect(() => {
        console.log('data', data)
        listLength = paginationData.object_count;
        list = data;
        load();
      });

    const eventItems = pageList.map((event, key) => {
        return(
            <div key={key}>
                <Event event={event}/>
            </div>
        )}
    );

    return(
        <div>
            {pageList.length > 0
            ?<div>
                {eventItems}
            </div>
            :null}
            <button onClick={()=>firstPage()}>First</button>
            <button onClick={()=>nextPage()}>Next</button>
            <button onClick={()=>prevPage()}>Previous</button>
            <button onClick={()=>lastPage()}>Last</button>
        </div>
    )
}

export default Events;



//Pagination data and calculations
//source: https://www.thatsoftwaredude.com/content/6125/how-to-paginate-through-a-collection-in-javascript
var listLength = 0;
var list = [];              //store data in list
var pageList = [];          //data that will show per screen
var currentPage = 1;
var numberPerPage = 20;     //number of items per page
var numberOfPages = 1;      // calculates the total number of pages

function load(){
    numberOfPages = getNumberOfPages();
    console.log('num of pages', numberOfPages);
    loadList();
}

function getNumberOfPages() {
    return Math.ceil(listLength / numberPerPage);
}

function nextPage() {
    currentPage += 1;
    loadList();
}

function prevPage() {
    currentPage -= 1;
    loadList();
}

function firstPage() {
    currentPage = 1;
    loadList();
}

function lastPage() {
    currentPage = numberOfPages;
    loadList();
}

function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    console.log('pagelist', pageList)
    console.log('pagelist length', pageList.length)
}