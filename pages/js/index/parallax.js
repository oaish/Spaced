const astronaut = document.getElementById("astronaut")
const lunar = document.getElementById("lunar")
const earth = document.getElementById("earth")

const isMobile = /Mobi|iPod|iPhone|Android|BlackBerry|Windows Phone|webOS|Mobile Safari|Opera Mini/i.test(navigator.userAgent)

const handleScroll = () => {
    let value = window.scrollY;
    earth.style.top = value * 1.01 + 'px';

    if (!isMobile) {
        lunar.style.top = value * 0.7 + 'px';
    }

};

window.addEventListener('scroll', handleScroll);