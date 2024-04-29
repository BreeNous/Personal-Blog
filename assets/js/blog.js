
document.addEventListener('DOMContentLoaded', makeCard);

let main = document.getElementById('main');

function makeCard () {
    const lastPost = JSON.parse(localStorage.getItem('blogPostData'));

    // Card container
    let cardContainer = document.createElement("div");
    cardContainer.className = "card";

    // Card header
    let cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.textContent = lastPost.postTitle;

    // Card body
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.textContent = lastPost.postContent;

    // Card footer
    let cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";
    cardFooter.textContent = lastPost.userName;

    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardBody);
    cardContainer.appendChild(cardFooter);

    main.appendChild(cardContainer);
}

function backButton() {
    
}

