const icons = {
    homeIcon: "img/icon/google_earth.svg",
    missionIcon: "img/icon/space_shuttle.svg",
    galleryIcon: "img/icon/aperture.png",
    aboutIcon: "img/icon/about.png"
}

const indices = [
    {
        text: 'Plan your voyage',
        isLink: true,
        link: '#voyage',
        origin: "Home",
        icon: icons.homeIcon,
        keywords: [/plan/i, /your/i, /voyage/i],
        exec: function () {

        }
    },
    {
        text: 'Choose your desired planet',
        isLink: true,
        link: '#voyage',
        origin: "Mission",
        icon: icons.missionIcon,
        keywords: [/mon/i, /plan[et]?/i, /your/i, /planet/i, /planets/i, /destination/i],
        exec: function () {
            searchResultShow('none');
            console.log("yeah");
        }
    },
    {
        text: 'Sign Out',
        isLink: false,
        link: '#settings',
        origin: "Settings",
        icon: icons.missionIcon,
        keywords: [/signout/i, /sign out/i, /logout/i, /log out/i],
        exec: function () {
            searchResultShow('none');
            settingsBtn.click();
            console.log("yeah nah");
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