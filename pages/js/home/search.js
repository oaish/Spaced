const searchBox = document.querySelector(".search-box")
const searchResult = document.querySelector(".search-result")
const clearBtn = document.querySelector(".clear")

let matchedResults = []
let searchItemCount = -1
searchBox.value && clearBtnShow() // Persists the clear button after reload

searchBox.oninput = handleSearchBoxInput

function handleSearchBoxInput() {
    searchResult.innerHTML = ""
    searchItemCount = -1
    const text = searchBox.value.trim().toLowerCase();

    if (text === "") {
        searchResultShow('none')
        clearBtnHide()
        return
    } else clearBtnShow()

    matchedResults = []
    indices.forEach(index => {
        const isMatched = index.text.toLowerCase().trim().includes(text)
        if (isMatched) {
            matchedResults.push(index)
        }
    })

    if (matchedResults.length > 0) {
        matchedResults.forEach(result => {
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

            const textToReplace = `<strong class="strong-text">${text}</strong>`
            const searchItemText = result.text.toLowerCase().replace(text, textToReplace)

            searchItem.innerHTML = `
                <img src="${result.icon}" width="20" height="20" alt=""> 
                <p>${searchItemText} - <span>${result.origin}</span></p>
            `;

            searchResult.appendChild(searchItem);
        })
        searchResultShow('block')
    } else {
        searchResultShow('none')
    }
}

searchBox.onclick = () => {
    resultClickHandler.isSearchBoxClicked = true
    handleSearchBoxInput()
}

searchBox.onkeydown = function (e) {
    const resultsCount = matchedResults.length
    if (resultsCount === 0) return
    const key = e.keyCode

    if (key === 13 && (searchItemCount > -1 && searchItemCount < resultsCount)) {
        searchResult.children[searchItemCount].click()
    }

    if (key === 38 && searchItemCount !== -1) {
        if (searchItemCount < resultsCount)
            searchResult.children[searchItemCount].classList.remove("search-item-active")
        searchItemCount--
        if (searchItemCount !== -1)
            searchResult.children[searchItemCount].classList.add("search-item-active")
        else {
            searchItemCount = resultsCount - 1
            searchResult.scrollTop = searchResult.scrollHeight
            searchResult.children[searchItemCount].classList.add("search-item-active")
        }

        if (searchItemCount <= resultsCount - 3)
            searchResult.scrollTop -= 50
    }

    if (key === 40 && searchItemCount < resultsCount) {
        if (searchItemCount > -1)
            searchResult.children[searchItemCount].classList.remove("search-item-active")

        searchItemCount++

        if (searchItemCount < resultsCount)
            searchResult.children[searchItemCount].classList.add("search-item-active")
        else {
            searchItemCount = 0
            searchResult.scrollTop = 0
            searchResult.children[searchItemCount].classList.add("search-item-active")
        }

        if (searchItemCount >= 3)
            searchResult.scrollTop += 50
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
    searchResult.scrollTop = 0
    if (type === "none") {
        searchBar.style.borderRadius = ".4rem"
        searchResult.innerHTML = ""
        searchItemCount = -1
    } else searchBar.style.borderRadius = ".4rem .4rem 0 0"
}

/*
`<a class="search-item" href="${link}">
    <img src="${icon}" width="24" height="24" alt="">
    <p>${text} - <span>${origin}</span></p>
</a>` 
*/