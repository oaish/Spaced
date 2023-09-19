function handlePlanetClick(planetName) {
    localStorage.setItem("destination", planetName)
    setCheckList()
}

function setCheckList() {
    const dest = document.querySelector("#dest")
    const date = document.querySelector("#date")
    const launch = document.querySelector("#lv")
    
    dest.textContent = localStorage.getItem("destination")
    date.textContent = localStorage.getItem("voyageDate")
    launch.textContent = localStorage.getItem("launchVehicle")
    handlePassBtn()
}

function updatePassenger(type) {
    const pass = document.querySelector("#passenger")
    const plus = document.querySelector(".plus")
    const minus = document.querySelector(".minus")
    let value = parseInt(pass.textContent)

    if (type === "plus") {
        if (value === 1) minus.classList.remove('pass-btn-hide')
        if (value === 4) plus.classList.add('pass-btn-hide')
        value++;
    }
    else if (type === "minus") {
        if (value === 2) minus.classList.add('pass-btn-hide')
        if (value === 5) plus.classList.remove('pass-btn-hide')
        value--;
    }
    
    pass.textContent = value.toString();
    localStorage.setItem("passenger", value.toString())
}

async function handleMainContent(id) {
    const planetsContainer = document.querySelector(".planets-container")
    const datesContainer = document.querySelector(".dates-container")
    
    switch (id) {
        case "planet-tab-btn":
            mainTitle.innerHTML = "Choose your desired planet";
            planetsContainer.classList.add('main-content-active')
            break;
        case "calendar-tab-btn":
            mainTitle.innerHTML = "Pick a voyage date";
            planetsContainer.classList.remove('main-content-active')
            datesContainer.classList.add('main-content-active')
            datesContainer.style.transitionDelay = '.5s'
            break;
        case "launch-tab-btn":
            mainTitle.innerHTML = "Select a launching vehicle";
            break;
    }
}

function handlePassBtn() {
    const pass = document.querySelector("#passenger")
    const plus = document.querySelector(".plus")
    const minus = document.querySelector(".minus")
    
    pass.textContent = localStorage.getItem("passenger")
    let value = parseInt(pass.textContent)
    
    if (value === 1) minus.classList.add('pass-btn-hide')
    if (value > 1) minus.classList.remove('pass-btn-hide')
    if (value < 5) plus.classList.remove('pass-btn-hide')
    if (value === 5) plus.classList.add('pass-btn-hide')
}

handlePassBtn()

