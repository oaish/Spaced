const logo = document.getElementById("logo")
const upBtn = document.querySelector(".up")
const inBtn = document.querySelector(".in")

const signupPage = document.querySelector(".sign-up")
const signinPage = document.querySelector(".sign-in")

const signupBack = document.getElementById("signupBack")
const signinBack = document.getElementById("signinBack")

const registerBtn = document.getElementById("register")
const loginBtn = document.getElementById("login")

const modal = document.getElementById("modal")
const modalBtn = document.querySelector(".modal-ok")

upBtn.onclick = function () {
    logo.classList.add("hidden-opacity")
    upBtn.classList.add("hidden-opacity")
    inBtn.classList.add("hidden-opacity")
    setTimeout(() => {
        handleFade(signupPage, false)
    }, 200)
}

inBtn.onclick = function () {
    logo.classList.add("hidden-opacity")
    upBtn.classList.add("hidden-opacity")
    inBtn.classList.add("hidden-opacity")
    setTimeout(() => {
        handleFade(signinPage, false)
    }, 200)
}

function handleFade(element, hide) {
    if (hide) {
        element.classList.add("hidden") // Form is Hidden
    }
    else {
        element.classList.remove("hidden") // Form is Shown
        logo.classList.add("hidden-display")
        upBtn.classList.add("hidden-display")
        inBtn.classList.add("hidden-display")
    }
    
}

signupBack.onclick = function () {
    handleFade(signupPage, true)
    fadeTimeout()
}


signinBack.onclick = function () {
    handleFade(signinPage, true)
    fadeTimeout()
}

function fadeTimeout() {
    setTimeout(() => {
        logo.classList.remove("hidden-display")
        upBtn.classList.remove("hidden-display")
        inBtn.classList.remove("hidden-display")

        logo.classList.remove("hidden-opacity")
        upBtn.classList.remove("hidden-opacity")
        inBtn.classList.remove("hidden-opacity")
    }, 400)
}

registerBtn.onclick = function (e) {
    e.preventDefault()
    const name = document.forms[0].name.value 
    const email = document.forms[0].email.value
    const pass = document.forms[0].pass.value
    const phone = document.forms[0].phone.value
    
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('pass', pass)
    localStorage.setItem('phone', phone)
    localStorage.setItem('isLoggedIn', 'false')
    
    document.forms[0].reset()
    modal.showModal()
}

loginBtn.onclick = function (e) {
    e.preventDefault()
    const email = document.forms[1].emailID.value
    const pass = document.forms[1].password.value

    const emailV = localStorage.getItem('email')
    const passV = localStorage.getItem('pass')
    
    if (email === emailV && pass === passV) {
        localStorage.setItem('isLoggedIn', 'true')
        window.location.href = '../../home.html'
    }
}

modalBtn.onclick = function () {
    modal.close()
    signupBack.click()
}