

let themeButton = document.getElementById("theme")

let changeTheme = function () {
    let body = document.getElementById("body");
    let header = document.getElementById("header");
    let middle = document.getElementById("middle");
    let statement = document.getElementById("statement");
    let blogUser = document.getElementById("blogUser");
    let blogTitle = document.getElementById("blogTitle");
    let blogContent = document.getElementById("blogContent");
    let submit = document.getElementById("submit");
    let username = document.getElementById("username");
    let title = document.getElementById("title");
    let content = document.getElementById("content");
    let circle = document.getElementById("circle")
    let isNightTheme = false;

    if (!isNightTheme) {
        themeButton.textContent = "🌙";
        body.classList.toggle("alt");
        header.classList.toggle("alt");
        middle.classList.toggle("alt");
        statement.classList.toggle("alt");
        blogUser.classList.toggle("alt");
        blogTitle.classList.toggle("alt");
        blogContent.classList.toggle("alt");
        submit.classList.toggle("alt");
        username.classList.toggle("alt");
        title.classList.toggle("alt");
        content.classList.toggle("alt");
        circle.classList.toggle("alt");
        
        isNightTheme = true;

    } else {
        themeButton.textContent = "☀️";
        body.classList.remove("alt");
        header.classList.remove("alt");
        middle.classList.remove("alt");
        statement.classList.remove("alt");
        blogUser.classList.remove("alt");
        blogTitle.classList.remove("alt");
        blogContent.classList.remove("alt");
        submit.classList.remove("alt");
        username.classList.remove("alt");
        title.classList.remove("alt");
        content.classList.remove("alt");
        circle.classList.remove("alt");


        isNightTheme = false;
    }
}

themeButton.addEventListener('click', changeTheme);