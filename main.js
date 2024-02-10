const passButton = document.getElementById('pass-button');
const randomButton = document.getElementById('random-button');
const likeButton = document.getElementById('like-button');
const coffeeImage = document.querySelector('.coffee-image');

const coffeeImages = [
    'images/americano.jpeg',
    'images/cappuccino.jpeg',
    'images/irish.jpg',
    'images/latte.jpg',
    'images/mocha.jpg',
    'images/turkish.jpg',
    'images/white.jpeg',
    'images/coffee1.jpg',
    'images/coffee2.jpg',
    'images/coffee3.jpg',
    'images/coffee4.jpg',
    'images/coffee5.jpg',
    'images/coffee6.jpg',
    'images/coffee7.jpg',
    'images/coffee8.jpg',
    'images/coffee9.jpg',
    'images/coffee10.jpg',
    'images/coffee11.jpg',
    'images/coffee12.jpg',
    'images/coffee13.jpg',
    'images/coffee14.jpg',
    'images/coffee15.jpg',
    'images/coffee16.jpg',
    'images/coffee17.jpg',
    'images/coffee18.jpg',
    'images/coffee19.jpg',
    'images/coffee20.jpg',
    'images/coffee21.jpg',
    'images/coffee22.jpg',
    'images/coffee23.jpg',
    'images/coffee24.jpg',
    'images/coffee25.jpg',
    'images/coffee26.jpg',
    'images/coffee27.jpg',
    'images/coffee28.jpg',
    'images/coffee29.jpg',
    'images/coffee30.jpg',
    'images/coffee31.jpg',
    // Add more image URLs here
  ];
  
let currentIndex = 0;


passButton.addEventListener('click', () => {
  // Add logic for passing (swiping left)
  //alert('Pass');
  swipeLeft();
  setTimeout(spawnNextImage, 500)
  console.log('Passed!');
});

randomButton.addEventListener('click', () => {
  // Add logic for displaying a random coffee image
  spawnRandomImage();
  console.log('Random coffee!');
});

likeButton.addEventListener('click', () => {
  // Add logic for liking (swiping right)
  //alert('Smash');
  swipeRight();
  setTimeout(spawnNextImage, 500)
  console.log('Liked!');
});


function swipeLeft() {
    coffeeImage.style.transform = 'translateX(-500%)';
    coffeeImage.style.opacity = 0;
}
  
function swipeRight() {
    coffeeImage.style.transform = 'translateX(500%)';
    coffeeImage.style.opacity = 0;
}
function spawnNextImage() {
    currentIndex = (currentIndex + 1) % coffeeImages.length; // Get the index of the next coffee image
    const nextImageSrc = coffeeImages[currentIndex]; // Get the URL of the next coffee image
    coffeeImage.src = nextImageSrc; // Update the src attribute of the coffee image element
    // Reset transformation and opacity for smooth transition
    setTimeout(() => {
      coffeeImage.style.transform = 'translateX(0)';
      coffeeImage.style.opacity = '1';
    }, ); // Wait for 500 milliseconds (same duration as transition) before resetting
  }
  
  
  function spawnRandomImage() {
    currentIndex = Math.floor(Math.random() * coffeeImages.length);
    // Get the index of the next coffee image
    const nextImageSrc = coffeeImages[currentIndex]; // Get the URL of the next coffee image
    coffeeImage.src = nextImageSrc; // Update the src attribute of the coffee image element
    // Reset transformation and opacity for smooth transition
    coffeeImage.style.transform = 'translateY(-500%)';
    coffeeImage.style.opacity = 0;
    setTimeout(() => {
      coffeeImage.style.transform = 'translateY(0)';
      coffeeImage.style.opacity = '1';
    }, 500); // Wait for 500 milliseconds (same duration as transition) before resetting
  }