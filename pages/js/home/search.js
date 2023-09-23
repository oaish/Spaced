const searchBox = document.querySelector(".search-box")
const searchResult = document.querySelector(".search-result")
const clearBtn = document.querySelector(".clear")

searchBox.value && clearBtnShow()

searchBox.oninput = function (e) {
    searchResult.innerHTML = ""
    if (searchBox.value === "") clearBtnHide()
    else clearBtnShow()

    const text = e.target.value.trim().toLowerCase();
    const matchedResults = []
    
    if (text.length < 1) {
        searchResultShow('none')
        return
    }

    indices.forEach(index => {
        const isMatched = index.text.toLowerCase().trim().includes(text)
        if (isMatched) { 
            matchedResults.push(index)
        }
    })

    if (matchedResults.length > 0) {
        matchedResults.map(result => {
            const searchItem = document.createElement("div");

            searchItem.classList.add("search-item");
            searchItem.addEventListener("click", () => {
                if (result.isLink) {
                    window.location.href = result.link
                }
                searchResultShow('none');
                clearBtn.click()
                result.exec(); 
            });
            
            const pattern = new RegExp(text, 'i')
            const textToReplace = `<strong class="strong-text">${text}</strong>`

            searchItem.innerHTML = `
                <img src="${result.icon}" width="24" height="24" alt="">
                <p>${result.text.toLowerCase().replace(pattern, textToReplace)} - <span>${result.origin}</span></p>
            `;

            searchResult.appendChild(searchItem);
        })
        searchResultShow('block')
    } else {
        searchResultShow('none')
    }
}

clearBtn.onclick = function () {
    searchBox.value = ""
    clearBtnHide()
}

function clearBtnShow() {
    clearBtn.classList.add("clear-btn-show")
}

function clearBtnHide() {
    searchResultShow('none')
    clearBtn.classList.remove("clear-btn-show")
}

function searchResultShow(type) {
    searchResult.style.display = type
    if (type === "none") {
        searchBar.style.borderRadius = ".4rem"
        searchResult.innerHTML = ""
    } 
    else searchBar.style.borderRadius = ".4rem .4rem 0 0"
}

/*
`<a class="search-item" href="${link}">
    <img src="${icon}" width="24" height="24" alt="">
    <p>${text} - <span>${origin}</span></p>
</a>` 
*/