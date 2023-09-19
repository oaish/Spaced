const searchBox = document.querySelector(".search-box")
const searchResult = document.querySelector(".search-result")
const clearBtn = document.querySelector(".clear")

searchBox.value && clearBtnShow()

searchBox.oninput = function (e) {
    searchResult.innerHTML = ""
    if (searchBox.value === "") clearBtnHide()
    else clearBtnShow()

    const text = e.target.value;
    const matchedResults = []

    indices.forEach(index => {
        const sr = index.keywords.find(keyword => keyword.test(text))
        if (sr) {
            matchedResults.push(index)
            console.log(matchedResults)
        }
    })

    if (matchedResults.length > 0) {
        matchedResults.map(result => {
            if (searchResult.innerHTML.includes(result.text)) return
            const x = result.exec
            searchResult.innerHTML += `<a class="search-item" href="${result.link}" onclick="${x}">
                                <img src="${result.icon}" width="24" height="24" alt="">
                                <p>${result.text} - <span>${result.origin}</span></p>
                             </a>`
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