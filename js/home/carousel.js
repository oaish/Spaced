const Slide = document.querySelector(".carousel-slide")
const SlideImages = document.querySelectorAll(".carousel-image")
const dot = document.querySelectorAll(".dot")

const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")

const slidesLength = SlideImages.length 
const dotsLength = dot.length 
let counter = 1;
let isChanged = false
const size = SlideImages[0].clientWidth;

Slide.style.transform = `translate(${-size * counter}px)`
dot[getCounter(counter)].checked = true

nextBtn.addEventListener('click', () => {
    if (counter >= slidesLength - 1) return
    Slide.style.transition = 'transform 0.4s ease-in-out'
    counter++;
    dot[getCounter(counter)].checked = true
    Slide.style.transform = `translate(${-size * counter}px)`
    isChanged = true
})


prevBtn.addEventListener('click', () => {
    if (counter <= 0) return
    Slide.style.transition = 'transform 0.4s ease-in-out'
    counter--;
    dot[getCounter(counter)].checked = true
    Slide.style.transform = `translate(${-size * counter}px)`
    isChanged = true
})

Slide.addEventListener('transitionend', () => {
    setTransition()
})

const interval =  setInterval(() => {
    if (isChanged) {
        isChanged=false
    }
    else {
        nextBtn.click()
    }
}, 10 * 1000)

function getCounter(counter) {
    if (counter === 0) return dotsLength - 1
    if (counter === slidesLength - 1) return 0
    return counter - 1
}

function setSlide(index) {
    console.log(dotsLength - 1, slidesLength - 1)
    if (index === dotsLength - 1 || counter === 1) {
        prevBtn.click();
    } 
    else if (index === 0 || counter === slidesLength - 2) {
        nextBtn.click();
    } 
    else {
        counter = index;
        nextBtn.click();
    }
}

function setTransition() {
    if (SlideImages[counter].id === 'firstClone') {
        Slide.style.transition = 'none'
        counter = 1;
        Slide.style.transform = `translate(${-size * counter}px)`
    }
    else if (SlideImages[counter].id === 'lastClone') {
        Slide.style.transition = 'none'
        counter = slidesLength - 2;
        Slide.style.transform = `translate(${-size * counter}px)`
    }
}