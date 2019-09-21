//pagination implementation
//source: https://www.thatsoftwaredude.com/content/6125/how-to-paginate-through-a-collection-in-javascript


var list = new Array();
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 10;
var numberOfPages = 1;   // calculates the total number of pages

function load() {
    //get data here
}

function load(){
    makeList();
    numberOfPages = getNumberOfPages();
}

window.onload = load;

function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

function nextPage() {
    currentPage += 1;
    loadList();
}

function nextPage() {
    currentPage += 1;
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
    drawList();    // draws out our data
    check();         // determines the states of the pagination buttons
}