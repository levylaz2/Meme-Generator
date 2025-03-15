console.log('Hello')

const memesQueue = [
    "./meme-gallery/darius.jpg",
    "./meme-gallery/nicolas.jpg",
    "./meme-gallery/noah.jpg",
     "./meme-gallery/ben.jpg",
    "./meme-gallery/chart.jpg",
    "./meme-gallery/emma.jpg",
    "./meme-gallery/gatewood.jpg",
    "./meme-gallery/istock.jpg",
    "./meme-gallery/nasa.jpg",
    "./meme-gallery/couple.jpg",
    "./meme-gallery/teacher.jpg",
    "./meme-gallery/tea.jpg",
];

let currentMemeIndex = 0;

const memeImgElement = document.getElementById("meme-image");
const changeMemeButton = document.getElementById("changeMemeBtn");

const memeButtonClicked = () => {
    currentMemeIndex++;

    if (currentMemeIndex >= memesQueue.length) {
        currentMemeIndex = 0;
    }

    memeImgElement.src = memesQueue[currentMemeIndex];
}

changeMemeButton.addEventListener("click", memeButtonClicked);




