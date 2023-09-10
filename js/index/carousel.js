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

dot[getCounter(counter)].checked = true
Slide.style.transform = `translate(${-size * counter}px)`

nextBtn.addEventListener('click', handleNextClick)

function handleNextClick() {
    if (counter >= slidesLength - 1) return
    counter++;
    handleSlide()
}

prevBtn.addEventListener('click', handlePrevClick)

function handlePrevClick() {
    if (counter <= 0) return
    counter--;
    handleSlide()
}

Slide.addEventListener('transitionend', handleTransitionEnd)

function handleTransitionEnd() {
    if (SlideImages[counter].id === 'firstClone') {
        counter = 1;
    } else if (SlideImages[counter].id === 'lastClone') {
        counter = slidesLength - 2;
    }
    Slide.style.transition = 'none'
    Slide.style.transform = `translate(${-size * counter}px)`
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

function handleSlide() {
    Slide.style.transition = 'transform 0.4s ease-in-out'
    dot[getCounter(counter)].checked = true
    Slide.style.transform = `translate(${-size * counter}px)`
    isChanged = true
}