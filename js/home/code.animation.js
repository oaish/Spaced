const textDoc = document.querySelector("#code-text").innerHTML;
const codeText = document.querySelector("#code-text");


let index = 0;
const delay = 10; 


function typeText() {
    if (index < textDoc.length) {
        codeText.innerHTML += textDoc.charAt(index) === '#' ? '<strong>SPACED</strong>, <br/>' : textDoc.charAt(index);
        index++;
        setTimeout(typeText, delay);
    }
}

codeText.innerHTML = ""
typeText()