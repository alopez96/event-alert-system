import React, { useState, useEffect } from 'react';
import Event from './Event';


function Events({ data, paginationData }){

    const [pageList, setPageList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [listLength , setListLength] = useState(0);

    var numberOfPages = 0;
    const numberPerPage = 4;

    useEffect(() => {
        console.log('data', data);
        setListLength(paginationData.object_count);
        load();
      }, []);

    const getNumberOfPages = () => {
        return Math.ceil(listLength / numberPerPage);
    }

    const firstPage = () => {
        setCurrentPage(1);
        loadList();
    }

    const nextPage = (current) => {
        setCurrentPage(current + 1);
        loadList();
    }

    const prevPage = (current) => {
        setCurrentPage(current - 1);
        loadList();
    }

    const lastPage = () => {
        setCurrentPage(getNumberOfPages());
        loadList();
    }

    const load = () => {
        numberOfPages = getNumberOfPages();
        console.log('num of pages', numberOfPages);
        loadList();
    }

    const loadList = () => {
        let begin = ((currentPage - 1) * numberPerPage);
        let end = begin + numberPerPage;

        setPageList(data.slice(begin, end));
        console.log('pagelist', pageList);
        console.log('pagelist length', pageList.length);
    }

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