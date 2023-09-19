const icons = {
    homeIcon: "img/icon/google_earth.svg",
    missionIcon: "img/icon/space_shuttle.svg",
    galleryIcon: "img/icon/aperture.png",
    aboutIcon: "img/icon/about.png"
}

const indices = [
    {
        text: 'Plan your voyage',
        link: '#voyage',
        origin: "Home",
        icon: icons.homeIcon,
        keywords: [/voyage/i, /plan/i, /your/i, /planet/i, /planets/i, /destination/i, /passenger/i, /dates/i],
        exec: function () {

        }
    },
    {
        text: 'Choose your desired planet',
        link: '#voyage',
        origin: "Mission",
        icon: icons.missionIcon,
        keywords: [/mon/i, /plan[et]?/i, /your/i, /planet/i, /planets/i, /destination/i],
        exec: function search() {
            searchResultShow('none');
            console.log("yeah");
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