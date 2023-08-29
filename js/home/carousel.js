const Slide = document.querySelector(".carousel-slide")
const SlideImages = document.querySelectorAll(".carousel-image")

const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")

let counter = 1;
let isChanged = false
const size = SlideImages[0].clientWidth;

Slide.style.transform = `translate(${-size * counter}px)`

nextBtn.addEventListener('click', () => {
    if (counter >= SlideImages.length - 1) return
    Slide.style.transition = 'transform 0.4s ease-in-out'
    counter++;
    Slide.style.transform = `translate(${-size * counter}px)`
    isChanged = true
})


prevBtn.addEventListener('click', () => {
    if (counter <= 0) return
    Slide.style.transition = 'transform 0.4s ease-in-out'
    counter--;
    Slide.style.transform = `translate(${-size * counter}px)`
    isChanged = true
})

Slide.addEventListener('transitionend', () => {
    if (SlideImages[counter].id === 'firstClone') {
        Slide.style.transition = 'none'
        counter = 1;
        Slide.style.transform = `translate(${-size * counter}px)`
    }
    else if (SlideImages[counter].id === 'lastClone') {
        Slide.style.transition = 'none'
        counter = SlideImages.length - 2;
        Slide.style.transform = `translate(${-size * counter}px)`
    }
})

const interval =  setInterval(() => {
    if (isChanged) {
        isChanged=false
    }
    else {
        nextBtn.click()
    }
}, 10 * 1000)