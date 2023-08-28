const data = [
    {
        title: 'THE MOON!',
        src: 'img/Moon.png',
        content: 'The Moon, Earth\'s closest celestial companion, has captivated human imagination for millennia. With its\n' +
            '                gentle silver glow and prominent presence in the night sky, the moon has been a source of inspiration\n' +
            '                for poets, artists, and scientists alike. As Earth\'s only natural satellite, the moon plays a crucial\n' +
            '                role in stabilizing our planet\'s rotation and influencing tides through its gravitational pull. Its\n' +
            '                surface is a testament to the violent cosmic history, marked by countless impact craters and vast lunar\n' +
            '                seas, known as maria, created by ancient volcanic activity. The moon\'s study has not only deepened our\n' +
            '                understanding of the solar system\'s formation but has also paved the way for human space exploration,\n' +
            '                including the iconic Apollo missions that landed astronauts on its surface, leaving footprints as a\n' +
            '                symbol of human achievement.'
    },
    {
        title: 'THE Earth!',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/330px-The_Blue_Marble_%28remastered%29.jpg',
        content: 'The Moon, Earth\'s closest celestial companion, has captivated human imagination for millennia. With its\n' +
            '                gentle silver glow and prominent presence in the night sky, the moon has been a source of inspiration\n' +
            '                for poets, artists, and scientists alike. As Earth\'s only natural satellite, the moon plays a crucial\n' +
            '                role in stabilizing our planet\'s rotation and influencing tides through its gravitational pull. Its\n' +
            '                surface is a testament to the violent cosmic history, marked by countless impact craters and vast lunar\n' +
            '                seas, known as maria, created by ancient volcanic activity. The moon\'s study has not only deepened our\n' +
            '                understanding of the solar system\'s formation but has also paved the way for human space exploration,\n' +
            '                including the iconic Apollo missions that landed astronauts on its surface, leaving footprints as a\n' +
            '                symbol of human achievement.'
    }
]

const desc = document.querySelector(".desc")
const title = document.querySelector(".desc > h3")
const image = document.querySelector(".desc > img")
const content = document.querySelector(".desc > p")

function setArticle(data) {
    title.innerHTML = data.title
    image.setAttribute('src', data.src)
    content.innerHTML = data.content
}

const sq = document.querySelectorAll(".sq")
let activeSq = document.querySelector(".a")

setArticle(data[0])

sq.forEach((s) => {
    s.addEventListener('click', () => {
        activeSq.classList.remove("active")
        desc.classList.add("fade")
        activeSq = s
        activeSq.classList.add("active")

        setTimeout(() => {
            if (s.classList.contains('a')) {
                setArticle(data[0])
            } else if (s.classList.contains('b')) {
                setArticle(data[1])
            } else if (s.classList.contains('c')) {
                setArticle(data[0])
            } else if (s.classList.contains('d')) {
                setArticle(data[0])
            }
            desc.classList.remove("fade")
        }, 500)
    })
})
