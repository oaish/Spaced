const Slide = document.querySelector(".carousel-slide")
const SlideImages = document.querySelectorAll(".carousel-image")
const dot = document.querySelectorAll(".dot")

const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")

const slidesLength = SlideImages.length
const dotsLength = dot.length
let counter = 1;
let isChanged = false
let isHovered = false
const size = SlideImages[0].clientWidth;

Slide.style.transform = `translate(${-size * counter}px)`
dot[getCounter(counter)].checked = true

nextBtn.addEventListener('click', handleNextClick)

function handleNextClick() {
    if (counter >= slidesLength - 1) return
    Slide.style.transition = 'transform 0.4s ease-in-out'
    counter++;
    dot[getCounter(counter)].checked = true
    Slide.style.transform = `translate(${-size * counter}px)`
    isChanged = true
}

prevBtn.addEventListener('click', handlePrevClick)

function handlePrevClick() {
    if (counter <= 0) return
    Slide.style.transition = 'transform 0.4s ease-in-out'
    counter--;
    dot[getCounter(counter)].checked = true
    Slide.style.transform = `translate(${-size * counter}px)`
    isChanged = true
}

Slide.addEventListener('transitionend', handleTransitionEnd)

function handleTransitionEnd() {
    if (SlideImages[counter].id === 'firstClone') {
        Slide.style.transition = 'none'
        counter = 1;
        Slide.style.transform = `translate(${-size * counter}px)`
    } else if (SlideImages[counter].id === 'lastClone') {
        Slide.style.transition = 'none'
        counter = slidesLength - 2;
        Slide.style.transform = `translate(${-size * counter}px)`
    }
}

Slide.addEventListener('mouseover', () => {isHovered = true})

Slide.addEventListener('mouseout', () => {isHovered = false})

const interval = setInterval(() => {
    if (isHovered) return
    if (isChanged) {
        isChanged = false
    } else {
        nextBtn.click()
    }
}, 5 * 1000)

function getCounter(counter) {
    if (counter === 0) return dotsLength - 1
    if (counter === slidesLength - 1) return 0
    return counter - 1
}

function setSlide(index) {
    if (index === 0 && counter === 5) {
        Slide.style.transition = 'transform 0.4s ease-in-out'
        counter++;
        dot[0].checked = true
        Slide.style.transform = `translate(${-size * counter}px)`
        isChanged = true
    } else if (index === dotsLength - 1 && counter === 1) {
        Slide.style.transition = 'transform 0.4s ease-in-out'
        counter--;
        dot[4].checked = true
        Slide.style.transform = `translate(${-size * counter}px)`
        isChanged = true
    }
    else {
        counter = index
        handleNextClick()
    }
}
