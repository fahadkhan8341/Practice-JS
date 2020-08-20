document.querySelector('#form').addEventListener('submit', saveBookmark)
window.addEventListener('DOMContentLoaded', showBookmarks)
let nameRegex = /^[a-zA-Z0-9_.-]*$/;
let urlRegex = /^(([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]|[a-zA-Z0-9])\.)*[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/

function saveBookmark(e) {
    let name = document.querySelector('.name').value;
    let url = document.querySelector('.url').value;
    let https = document.querySelector('#https').textContent


    // name=name.toUpperCase()
    if (!nameRegex.test(name) || !urlRegex.test(url)) {
        showMsg('Please Enter the valid name and URL', 'danger')

    } else {
        url = https + url;
        let bookmark = { name, url }

        if (localStorage.getItem('bookmarks') === null) {
            let bookmarks = []
            bookmarks.push(bookmark)
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
            showMsg('Bookmark successfully added below', 'success')
        } else {
            let bookmarks = validateUrl(url)
            if (bookmarks) {
                bookmarks.push(bookmark)
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
                showMsg('Bookmark successfully added below', 'success')

            } else {
                showMsg('This bookmark URL already exists.', 'danger')
            }

            console.log(bookmarks)
        }

    }

    showBookmarks()
    document.querySelector('#form').reset()
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
            if (confirm('Do you really want to remove this bookmark?')) {
                bookmarks.splice(i, 1)
            } else {
                return
            }
        }
    }
    showMsg('Bookmark removed successfully.', 'warning')
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    showBookmarks()
}


function showMsg(message, className) {
    let msg = `<div class="alert alert-${className}" role="alert">
    ${message}
  </div>`;
    let errorContainer = document.querySelector('.msg');
    errorContainer.innerHTML = msg
    setTimeout(() => errorContainer.innerHTML = '', 3000)
}

function validateUrl(url) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for (i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url === url) {

            return false
        }
    }
    return bookmarks
}
