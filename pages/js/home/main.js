const buttons = document.querySelectorAll(".main-box-tab button")
const mainTitle = document.querySelector(".main-box-title h2")
const mainContainer = document.querySelector("#main-content")


buttons.forEach((button) => {
    button.onclick = function () {
        buttons.forEach(btn => btn.classList.remove("main-box-active"))
        button.classList.add("main-box-active")
        handleMainContent(button.id)
    }
})

