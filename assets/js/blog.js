
let backBtn = document.getElementById('backBtn');
let main = document.getElementById('main');
const postData = JSON.parse(localStorage.getItem('postsArray'));

document.addEventListener('DOMContentLoaded', makeCard)

function makeCard() {
    if (postData) {
        postData.forEach(post => {
            // Card container
            let cardContainer = document.createElement("div");
            cardContainer.className = "card", "card.alt";
            cardContainer.id = "card";

            // Card header
            let cardHeader = document.createElement("div");
            cardHeader.className = "cardHeader", "cardHeader.alt";
            cardHeader.innerHTML = post.postTitle;
            cardHeader.id = "cardHeader";

            // Card body
            let cardBody = document.createElement("div");
            cardBody.className = "cardBody", "cardBody.alt";
            cardBody.innerHTML = post.postContent;
            cardBody.id = "cardBody";

            // Card footer
            let cardFooter = document.createElement("div");
            cardFooter.className = "cardFooter", "cardFooter.alt";
            cardFooter.innerHTML = (`Posted by: ${post.userName}`);
            cardFooter.id = "cardFooter";

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


