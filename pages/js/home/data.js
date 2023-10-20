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
        exec: function () {
        }
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
        text: 'Exploring a metal asteroid',
        isLink: true,
        link: 'mission.html',
        origin: "Mission",
        icon: icons.missionIcon,
        exec: function () {
            searchResultShow('none');
        }
    },
    {
        text: 'About the psyche spacecraft',
        isLink: true,
        link: 'missionPages/Psyche.html#data',
        origin: "Mission",
        icon: icons.missionIcon,
        exec: function () {
            searchResultShow('none');
        }
    },
    {
        text: 'Overview of psyche',
        isLink: true,
        link: 'missionPages/Psyche.html#overview',
        origin: "Mission",
        icon: icons.missionIcon,
        exec: function () {
            searchResultShow('none');
        }
    },
    {
        text: 'Artemis',
        isLink: true,
        link: 'missionPages/Artemis.html#data',
        origin: "Mission",
        icon: icons.missionIcon,
        exec: function () {
            searchResultShow('none');
        }
    },
    {
        text: 'Artemis Accords',
        isLink: true,
        link: 'missionPages/Artemis.html#accords',
        origin: "Mission",
        icon: icons.missionIcon,
        exec: function () {
            searchResultShow('none');
        }
    },
    {
        text: 'Humans in Space',
        isLink: true,
        link: 'missionPages/humansinspace.html',
        origin: "Mission",
        icon: icons.missionIcon,
        exec: function () {
            searchResultShow('none');
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
            if (isCosmonautVisible) {
                this.text = "Cosmonaut, return!!!"
                begoneCosmonaut()
            } else {
                this.text = "Cosmonaut, begone!!!"
                spawnCosmonaut()
            }
        }
    }
];

let isCosmonautVisible = true
const dim = document.querySelector("#dim")
const portal = document.querySelector(".portal");
const astronaut = document.querySelector(".astronaut");

function begoneCosmonaut() {
    if (!isCosmonautVisible) return
    isCosmonautVisible = true

    dim.style.opacity = '1'
    setTimeout(() => {
        astronaut.style.scale = '0.85'
        astronaut.style.rotate = '-15deg'
    }, 0.6 * 1000)
    setTimeout(() => dim.style.opacity = '0', 4.2 * 1000)

    portal.play()
    portal.playbackRate = '1.05'

    setTimeout(() => {
        astronaut.style.scale = '0'
        astronaut.style.translate = '-20% -20%'
        astronaut.style.rotate = '-120deg'
        isCosmonautVisible = false
    }, 1.2 * 1000);
}

function spawnCosmonaut() {
    if (isCosmonautVisible) return
    isCosmonautVisible = false

    dim.style.opacity = '1'
    setTimeout(() => dim.style.opacity = '0', 4 * 1000)

    portal.play()
    portal.playbackRate = '1.05'

    setTimeout(() => {
        astronaut.style.scale = '1'
        astronaut.style.translate = '0 0'
        astronaut.style.rotate = '0deg'
        isCosmonautVisible = true
    }, 2 * 1000);
}
