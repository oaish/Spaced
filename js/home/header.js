const settingsBtn = document.querySelector(".settings")
const options = document.querySelector(".options")
const menuBtn = document.querySelector(".menu-btn")
const menuItems = document.querySelector(".item-group")
const items = document.querySelectorAll(".item-btn")
const opts = document.querySelectorAll(".opt")
const logout = document.querySelector('.logout')

menuBtn.onclick = () => {
    if (menuItems.classList.contains('drop-down')) {
        items.forEach(item => item.style.pointerEvents = 'none') 
    } 
    else {
        items.forEach(item => item.style.pointerEvents = 'all')
    }
    menuItems.classList.toggle('drop-down')
    menuBtn.classList.toggle('filter')
}

settingsBtn.onclick = () => {
    if (options.classList.contains('options-active')) {
        opts.forEach(opt => opt.style.pointerEvents = 'none')
    } 
    else {
        opts.forEach(opt => opt.style.pointerEvents = 'all')
    }
    options.classList.toggle('options-active')
}

const home = document.querySelector('#home')
const mission = document.querySelector("#mission")
const gallery = document.querySelector("#gallery")
const about = document.querySelector("#about")

home.onclick = () => { window.location.href = `home.html` }
mission.onclick = () => { window.location.href = `mission.html` }
gallery.onclick = () => { window.location.href = `gallery.html` }
about.onclick = () => { window.location.href = `about.html` }

logout.onclick = function () {
    localStorage.setItem('isLoggedIn', 'false')
    window.location.href = '../index.html'
}

document.onclick = function (event) {
    if (!menuBtn.contains(event.target) && !menuItems.contains(event.target)) {
        items.forEach(item => item.style.pointerEvents = 'none')
        menuItems.classList.remove('drop-down')
        menuBtn.classList.remove('filter')
    }
    if (!settingsBtn.contains(event.target) && !options.contains(event.target)) {
        options.classList.remove('options-active')
        opts.forEach(opt => opt.style.pointerEvents = 'none')
    }
    if (!searchResult.contains(event.target)) {
        searchResultShow('none')
    }
};