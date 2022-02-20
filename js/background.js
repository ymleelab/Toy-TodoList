const images = [
    "00.jpg",
    "01.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(img/${chosenImage})`;
