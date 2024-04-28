let themeButton = document.getElementById("theme")
let changeButton = themeButton
let body = document.getElementById("body");
let header = document.getElementById("header");
let middle = document.getElementById("middle");
let statement = document.getElementById("statement");
let userName = document.getElementById("userName");
let blogTitle = document.getElementById("blogTitle");
let blogContent = document.getElementById("blogContent");
let submit = document.getElementById("submit");
let username = document.getElementById("username");
let title = document.getElementById("title");
let content = document.getElementById("content");

let isNightMode = false;

let changeTheme = function () {

    if (!isNightMode) {
        changeButton.textContent = "🌙"
        body.style.backgroundColor = "black";
        header.style.borderColor = "white";
        middle.style.borderColor = "white";
        statement.style.color = "white";
        userName.style.color = "white";
        blogTitle.style.color = "white";
        blogContent.style.color = "white";
        submit.style.color = "black";
        submit.style.backgroundColor = "white";
        username.style.borderColor = "white";
        username.style.backgroundColor = "black";
        username.style.color = "white";
        title.style.borderColor = "white";
        title.style.backgroundColor = "black";
        title.style.color = "white";
        content.style.borderColor = "white";
        content.style.backgroundColor = "black";
        content.style.color = "white";

        isNightMode = true;
    } else {
        changeButton.textContent = "☀️"
        body.style.backgroundColor = "white";
        header.style.borderColor = "black";
        middle.style.borderColor = "black";
        statement.style.color = "black";
        userName.style.color = "black";
        blogTitle.style.color = "black";
        blogContent.style.color = "black";
        submit.style.color = "white";
        submit.style.backgroundColor = "black";
        username.style.borderColor = "black";
        username.style.backgroundColor = "white";
        username.style.color = "black";
        title.style.borderColor = "black";
        title.style.backgroundColor = "white";
        title.style.color = "black";
        content.style.borderColor = "black";
        content.style.backgroundColor = "white";
        content.style.color = "black";


        isNightMode = false;
    }
}

themeButton.addEventListener('click', changeTheme);
