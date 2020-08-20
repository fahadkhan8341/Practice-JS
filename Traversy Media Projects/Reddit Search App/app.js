
document.querySelector('#search-form').addEventListener('submit', searchForm)
let search = document.querySelector('#search-input');

function searchForm(e) {
    let searchInput = search.value;
    let sortBy = document.querySelector('input[name="sortby"]:checked').value
    let searchLimit = document.querySelector('#limit').value;

    searchApi(searchInput, sortBy, searchLimit)
    // console.log(searchLimit)

    e.preventDefault()
}

function searchApi(searchInput, sortBy, searchLimit) {

    fetch(`https://www.reddit.com/search.json?q=${searchInput}&sort=${sortBy}&limit=${searchLimit}`, { mode: 'no-cors' })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
        })
}