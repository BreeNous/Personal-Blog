

let blogTheme = document.getElementById("sun")

let changeBlogTheme = function () {
    let blogBody = document.getElementById("blogBody");
    let blogHeader = document.getElementById("top");
    let blogHeaderTitle = document.getElementById("topTitle");
    let blogBackBtn = document.getElementById("backBtn");
    let blogSubmissions = document.getElementById("main");
    let blogFoot = document.getElementById("blogFoot");
    let madeBy = document.getElementById("madeBy");
    let resources = document.getElementById("resources");
    let card = document.getElementById("card");
    let cardHeader = document.getElementById("cardHeader");
    let cardBody = document.getElementById("cardBody");
    let cardFooter = document.getElementById("cardFooter");
    let isBlogNightTheme = false;

    if (!isBlogNightTheme) {
        blogTheme.textContent = "🌙";
        blogBody.classList.toggle("alt");
        blogHeader.classList.toggle("alt");
        blogHeaderTitle.classList.toggle("alt");
        blogBackBtn.classList.toggle("alt");
        blogSubmissions.classList.toggle("alt");
        blogFoot.classList.toggle("alt");
        madeBy.classList.toggle("alt");
        resources.classList.toggle("alt");
        card.classList.toggle("alt");
        cardHeader.classList.toggle("alt");
        cardBody.classList.toggle("alt");
        cardFooter.classList.toggle("alt");
        
        isBlogNightTheme = true;
    } else {
        blogTheme.textContent = "☀️";
        blogBody.classList.remove("alt");
        blogHeader.classList.remove("alt");
        blogHeaderTitle.classList.remove("alt");
        blogBackBtn.classList.remove("alt");
        blogSubmissions.classList.remove("alt");
        blogFoot.classList.remove("alt");
        madeBy.classList.remove("alt");
        resources.classList.remove("alt");
        card.classList.remove("alt");
        cardHeader.classList.remove("alt");
        cardBody.classList.remove("alt");
        cardFooter.classList.remove("alt");

        isBlogNightTheme = false;
    }
}

blogTheme.addEventListener('click', changeBlogTheme);