const searchBox = document.querySelector(".search-box")
const searchResult = document.querySelector(".search-result")
const clearBtn = document.querySelector(".clear")

searchBox.value && clearBtnShow()

searchBox.oninput = function () {
    if (searchBox.value === "") clearBtnHide()
    else clearBtnShow()
    searchResultShow('block')
    
}

clearBtn.onclick = function () {
    searchBox.value = ""
    clearBtnHide()
}

function clearBtnShow() {
    clearBtn.style.opacity = '1'
    clearBtn.style.pointerEvents = 'all'
    clearBtn.style.cursor = 'var(--pointer), auto'
}

function clearBtnHide() {
    searchResultShow('none')
    clearBtn.style.opacity = '0'
    clearBtn.style.pointerEvents = 'none'
    clearBtn.style.cursor = 'var(--cursor), auto'
} 

function searchResultShow(type) {
    searchResult.style.display = type
}