function handlePlanetClick(planetName) {
    localStorage.setItem("destination", planetName)
    setCheckList()
}

function handleDateClick(date) {
    localStorage.setItem("voyageDate", date)
    setCheckList()
}

function handleLaunchClick(agencyName) {
    localStorage.setItem("launchAgency", agencyName)
    setCheckList()
}

function setCheckList() {
    const dest = document.querySelector("#dest")
    const date = document.querySelector("#date")
    const launch = document.querySelector("#lv")

    dest.textContent = localStorage.getItem("destination")
    date.textContent = localStorage.getItem("voyageDate")
    launch.textContent = localStorage.getItem("launchAgency")
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
    } else if (type === "minus") {
        if (value === 2) minus.classList.add('pass-btn-hide')
        if (value === 5) plus.classList.remove('pass-btn-hide')
        value--;
    }

    pass.textContent = value.toString();
    localStorage.setItem("passenger", value.toString())
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

function handleVoyageSubmit() {
    const dest = document.querySelector("#dest")
    const date = document.querySelector("#date")
    const launch = document.querySelector("#lv")

    if (date && dest && launch) {
        alert("Voyage has been booked!")
    }
}

function handleFirstTime() {
    handlePlanetClick('-')
    handleDateClick('-')
    handleLaunchClick('-')
    localStorage.setItem("passenger", "1")
    handlePassBtn()
}

handleFirstTime()
