const textDoc = document.querySelector("#code-text").innerHTML;
const codeText = document.querySelector("#code-text");
const searchBar = document.querySelector(".search-bar");

let index = 0;
const delay = 10;

if(sessionStorage.getItem('visited')) {
    codeText.innerHTML = "Welcome to <strong>SPACED</strong>, <br/> where the mysteries of the universe meet the wonders of human exploration."
    searchBar.style.transition = 'none'
    searchBar.style.opacity = '1'
    searchBar.style.translate = '0 0'
}
else {
    codeText.innerHTML = ""
}

function typeText() {
    if(sessionStorage.getItem('visited')) return
    if (index < textDoc.length) {
        codeText.innerHTML += textDoc.charAt(index) === '#' ? '<strong>SPACED</strong>, <br/>' : textDoc.charAt(index);
        index++;
        setTimeout(typeText, delay);
    } 
    else {
        searchBar.style.opacity = '1'
        searchBar.style.translate = '0'
        sessionStorage.setItem('visited', "true")
    }
}

typeText()