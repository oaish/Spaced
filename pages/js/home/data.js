const icons = {
    homeIcon: "img/icon/google_earth.svg",
    missionIcon: "img/icon/space_shuttle.svg",
    galleryIcon: "img/icon/aperture.png",
    aboutIcon: "img/icon/about.png",
    settingsIcon: "img/icon/settings.svg",
    easterEggIcon: "img/icon/easter_egg.svg"
}

const indices = [
    {
        text: 'Plan your voyage',
        isLink: true,
        link: '#voyage',
        origin: "Home",
        icon: icons.homeIcon,
        exec: function () {}
    },
    {
        text: 'Choose your desired planet',
        isLink: true,
        link: '#voyage',
        origin: "Home",
        icon: icons.homeIcon,
        exec: function () {
            searchResultShow('none');
            document.querySelector("#planets").click()
        }
    },
    {
        text: 'Pick a voyage date',
        isLink: true,
        link: '#voyage',
        origin: "Home",
        icon: icons.homeIcon,
        exec: function () {
            searchResultShow('none');
            document.querySelector("#dates").click()
        }
    },
    {
        text: 'Select your launching agency',
        isLink: true,
        link: '#voyage',
        origin: "Home",
        icon: icons.homeIcon,
        exec: function () {
            searchResultShow('none');
            document.querySelector("#launch").click()
        }
    },
    {
        text: 'Sign Out',
        isLink: false,
        origin: "Settings",
        icon: icons.settingsIcon,
        exec: function () {
            resultClickHandler.isSettingsClicked = true
            settingsBtn.click();
            logout.focus()
        }
    },
    {
        text: "Where is Cosmonaut",
        isLink: false,
        origin: "Mystery",
        icon: icons.easterEggIcon,
        exec: function () {
            if (!isCosmonautVisible) return
            document.querySelector("#dim").style.opacity = '1'
            document.querySelector(".astronaut").style.rotate = '-5deg'
            setTimeout(() => {
                document.querySelector("#dim").style.opacity = '0'
                document.querySelector(".astronaut").style.rotate = '0deg'
            }, 3 * 1000)
        }
    },
    {
        text: "Cosmonaut, begone!!!",
        isLink: false,
        origin: "Mystery",
        icon: icons.easterEggIcon,
        exec: function () {
            begoneCosmonaut()
        }
    },
    {
        text: "Cosmonaut, return!!!",
        isLink: false,
        origin: "Mystery",
        icon: icons.easterEggIcon,
        exec: function () {
            spawnCosmonaut()
        }
    }
];

let isCosmonautVisible = true

function begoneCosmonaut() {
    if (!isCosmonautVisible) return
    isCosmonautVisible = true
    
    const dim = document.querySelector("#dim")
    const portal = document.querySelector(".portal");
    const astronaut = document.querySelector(".astronaut");
    
    dim.style.opacity = '1'
    astronaut.style.rotate = '-5deg'
    
    setTimeout(() => {
        dim.style.opacity = '0'
        // portal.style.display = "none"
    }, 4.2 * 1000)

    portal.style.display = "block"
    portal.play()
    portal.playbackRate = '1.05'

    setTimeout(() => {
        astronaut.style.scale = '0'
        astronaut.style.translate = '-20% -20%'
        astronaut.style.rotate = '-72deg'
        isCosmonautVisible = false
    }, 2 * 1000);
}

function spawnCosmonaut() {
    if (isCosmonautVisible) return
    isCosmonautVisible = false

    const dim = document.querySelector("#dim")
    const portal = document.querySelector(".portal");
    const astronaut = document.querySelector(".astronaut");

    dim.style.opacity = '1'

    setTimeout(() => {
        dim.style.opacity = '0'
        // portal.style.display = "none"
    }, 4 * 1000)

    portal.style.display = "block"
    portal.play()
    portal.playbackRate = '1.05'

    setTimeout(() => {
        astronaut.style.scale = '1'
        astronaut.style.translate = '0 0'
        astronaut.style.rotate = '0deg'
        isCosmonautVisible = true
    }, 2 * 1000);
}
