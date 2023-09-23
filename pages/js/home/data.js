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
        text: "Find the Cosmonaut",
        isLink: false,
        origin: "Mystery",
        icon: icons.easterEggIcon,
        exec: function () {
            document.querySelector("#dim").style.opacity = '1'
            document.querySelector(".astronaut").style.rotate = '-5deg'
            setTimeout(() => {
                document.querySelector("#dim").style.opacity = '0'
                document.querySelector(".astronaut").style.rotate = '0deg'
            }, 5 * 1000)
        }
    }
];

/* ObjectFormat */
/*
    {
        text: '',
        origin: "",
        icon: "",
        keywords: [],
        exec: function () {

        }
    }
*/