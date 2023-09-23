const buttons = document.querySelectorAll(".main-box-tab button")
const mainTitle = document.querySelector(".main-box-title h2")


buttons.forEach((button) => {
    button.onclick = function () {
        buttons.forEach(btn => btn.classList.remove("main-box-active"))
        button.classList.add("main-box-active")
        mainTitle.innerText = getMainTitleText(button.id)
        handleMainContent(button.id)
    }
})

function getMainTitleText(id) {
    switch (id) {
        case "planets":
            return "Choose your desired planet";
        case "dates":
            return "Pick a voyage date";
        case "launch":
            return "Select your launching agency";
        default:
            return "";
    }
}

function handleMainContent(id) {
    const contentContainers = document.querySelectorAll(".main-box-content > *")

    contentContainers.forEach(container => {
        if (container.classList.contains(id + '-container')) {
            container.classList.add('main-content-active');
            container.style.transitionDelay = '.5s'
        } else {
            container.classList.remove('main-content-active');
            container.style.transitionDelay = '0s'
        }
    });
}




