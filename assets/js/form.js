// Grabbing elements from html
const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.getElementById("submit");

// saves user input to local storage and clears the input fields for next entry upon submit button click.
let saveToLocalStorage = function() {
    let blogPostData = {
        userName: usernameInput.value,
        postTitle: titleInput.value,
        postContent: contentInput.value,
    };

    localStorage.setItem("blogPostData", JSON.stringify(blogPostData));

    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';
}

submitButton.addEventListener('click', saveToLocalStorage);