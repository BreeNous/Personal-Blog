// I don't understand why this code wont work, it keeps givimg me "Uncaught TypeError"
// I also what to understand why we need 500 different files for this project

const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.getElementById("submit");

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