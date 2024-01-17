const images = ["background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg", "background6.jpg", "background7.jpg"];


const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.height = "800";
bgImage.width = "1500";


document.body.appendChild(bgImage);