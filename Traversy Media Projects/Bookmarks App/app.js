document.querySelector('#form').addEventListener('submit', saveBookmark)
window.addEventListener('DOMContentLoaded', showBookmarks)

function saveBookmark(e) {
    let name = document.querySelector('.name').value;
    let url = document.querySelector('.url').value;
    let https = document.querySelector('#https').textContent
    url = https + url;

    // name=name.toUpperCase()

    let bookmark = { name, url }

    if (localStorage.getItem('bookmarks') === null) {
        let bookmarks = []
        bookmarks.push(bookmark)
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    } else {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))


        bookmarks.push(bookmark)
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        console.log(bookmarks)
        showBookmarks()
        document.querySelector('#form').reset()

    }

    e.preventDefault()
}

function showBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    let bookmarksContainer = document.querySelector('.bookmarksResult')
    let output = '';

    for (bookmark of bookmarks) {
        output += `<div class="alert alert-secondary d-flex mx-5" role="alert">
        <div class="data">
        <p>${bookmark.name}</p>
        <p class="lead text-info">${bookmark.url}</p></div>
        <div class="group ml-auto my-auto">
            <a class="btn btn-sm btn-outline-info" href="${bookmark.url}" target="_blank">Visit</a>
            <a onclick="removeBookmark('${bookmark.url}')" class="btn btn-sm btn-outline-danger">Remove</a>
        </div>
    </div>`;
    }
    bookmarksContainer.innerHTML = output;
}

function removeBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for (i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url === url) {
            bookmarks.splice(i, 1)
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    showBookmarks()
}


function showErrorMsg() {
    let msg = `<div class="alert alert-danger" role="alert">
    This bookmark URL already exists below.
  </div>`;
    let errorContainer = document.querySelector('.errMsg');
    errorContainer.innerHTML = msg
    setTimeout(() => errorContainer.innerHTML = '', 3000)
}

