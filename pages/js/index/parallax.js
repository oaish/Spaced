const lunar = document.getElementById("lunar")

const handleScroll = () => {
    let value = window.scrollY;
    lunar.style.top = value * 0.7 + 'px';
};

window.addEventListener('scroll', handleScroll);