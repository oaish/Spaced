const logo = document.getElementById("logo")
const upBtn = document.querySelector(".up")
const inBtn = document.querySelector(".in")

const glassPanel = document.querySelector(".glass-panel")

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
    } else {
        element.classList.remove("hidden") // Form is Shown
        logo.classList.add("hidden-display")
        upBtn.classList.add("hidden-display")
        inBtn.classList.add("hidden-display")
        glassPanel.style.backgroundColor = "rgba(0,0,0,0.5)"
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

        glassPanel.style.backgroundColor = "rgba(255,255,255,0.05)"

        logo.classList.remove("hidden-opacity")
        upBtn.classList.remove("hidden-opacity")
        inBtn.classList.remove("hidden-opacity")
    }, 500)
}

registerBtn.onclick = function (e) {
    e.preventDefault()
    signupValidation()
    modal.showModal()
}

loginBtn.onclick = function (e) {
    e.preventDefault()
    const email = document.forms[1].emailID.value
    const pass = document.forms[1].password.value

    const emailV = localStorage.getItem('email')
    const passV = localStorage.getItem('pass')

    if (!email || !pass) return

    if (email === emailV && pass === passV) {
        localStorage.setItem('isLoggedIn', 'true')
        window.location.href = 'pages/home.html'
    } else {
        setModal("INVALID CREDENTIALS", "Username or Password is incorrect", "modal-warning")
        modal.showModal()
    }
}

modalBtn.onclick = function () {
    const isOk = modal.children[2].className.includes("modal-ok");
    modal.close()
    if (isOk)
        signupBack.click()
}

let canSignUp = false

function signupValidation() {
    let pattern = null
    canSignUp = true

    const name = document.forms[0].name.value
    const email = document.forms[0].email.value
    const pass = document.forms[0].pass.value
    const phone = document.forms[0].phone.value

    if (!name || !email || !pass || !phone) {
        setModal("EMPTY FIELDS", "All fields are mandatory", "modal-warning")
        return
    }

    pattern = /^[A-Z]+$/i
    if (!pattern.test(name)) {
        setModal("INVALID NAME", "Name should contain letters only", "modal-warning")
        canSignUp = false
    }

    pattern = /^[A-Za-z0-9_\.]+@[A-Za-z0-9\.]+\.[A-Za-z]{2,}$/i
    if (!pattern.test(email)) {
        setModal("INVALID EMAIL FORMAT", "Format: example123@email.com", "modal-warning")
        canSignUp = false
    }

    pattern = /^\S{4,}$/
    if (!pattern.test(pass)) {
        setModal("INVALID PASSWORD", "Password should be atleast 4 character long", "modal-warning")
        canSignUp = false
    }

    pattern = /^[0-9]{10}$/i
    if (!pattern.test(phone)) {
        setModal("INVALID MOBILE NO", "It should be numeric and 10 digit long", "modal-warning")
        canSignUp = false
    }

    if (!canSignUp) return;
    setModal("USER REGISTERED", "You can log into your account now", "modal-ok")
    document.forms[0].reset()

    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('pass', pass)
    localStorage.setItem('phone', phone)
    localStorage.setItem('isLoggedIn', 'false')
}

function setModal(title, content, className) {
    modal.children[0].innerHTML = title;
    modal.children[1].innerHTML = content;
    modal.children[2].classList.add(className);
    if (className === "modal-ok")
        modal.children[2].classList.remove("modal-warning");
    else
        modal.children[2].classList.remove("modal-ok");
}