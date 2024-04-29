
let backBtn = document.getElementById('backBtn');
let main = document.getElementById('main');
const postData = JSON.parse(localStorage.getItem('postsArray'));

document.addEventListener('DOMContentLoaded', makeCard)

function makeCard() {
    if (postData) {
        postData.forEach(post => {
            // Card container
            let cardContainer = document.createElement("div");
            cardContainer.className = "card";

            // Card header
            let cardHeader = document.createElement("div");
            cardHeader.className = "card-header";
            cardHeader.innerHTML = post.postTitle;

            // Card body
            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
            cardBody.innerHTML = post.postContent;

            // Card footer
            let cardFooter = document.createElement("div");
            cardFooter.className = "card-footer";
            cardFooter.innerHTML = post.userName;

            cardContainer.appendChild(cardHeader);
            cardContainer.appendChild(cardBody);
            cardContainer.appendChild(cardFooter);

            main.appendChild(cardContainer);
        });
    }
}    
    

function backButton() {
    window.location.href = "index.html"
}
backBtn.addEventListener('click', backButton);


