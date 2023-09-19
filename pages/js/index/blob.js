const blob = document.querySelector(".blob")

window.onmousemove = (e) => {
    const x = e.clientX, y = e.clientY

    const keyframes = {
        left: `${x}px`,
        top: `${y}px`
    }


    blob.animate(keyframes,{
        duration: 300,
        fill: "forwards"
    })
}