
const submitButton = document.getElementById("submit");
// Grabbing elements from html

// saves user input to local storage and clears the input fields for next entry upon submit button click.
// then user is taken to the next page with window.location.href = "blog.html".
let saveToLocalStorage = function(event) {
    event.preventDefault();

    let usernameInput = document.getElementById("username").value;
    let titleInput = document.getElementById("title").value;
    let contentInput = document.getElementById("content").value;

    const newPostData = {
        userName: usernameInput,
        postTitle: titleInput,
        postContent: contentInput
    };

    let postsArray = JSON.parse(localStorage.getItem('postsArray'))

    if (postsArray === null) {
        postsArray = [newPostData];
        localStorage.setItem('postsArray', JSON.stringify(postsArray));
    } else {
        postsArray.push(newPostData);
        localStorage.setItem('postsArray', JSON.stringify(postsArray));
    }

    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';

    window.location.href = "blog.html"
   
}

submitButton.addEventListener('click', saveToLocalStorage);

