const searchBox = document.querySelector(".search-box")
const clearBtn = document.querySelector(".clear")

searchBox.oninput = function () {
    console.log("here")
    if (searchBox.value === "") {
        clearBtn.style.opacity = '0'
    }
    else {
        clearBtn.style.opacity = '1'
    }
}

clearBtn.onclick = function () {
    searchBox.clear()
}

