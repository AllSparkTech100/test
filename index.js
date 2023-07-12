var images = document.querySelectorAll('.slider img');
var currentIndex = 0;
var interval = setInterval(changeImage, 4000); // Change image every 4 seconds

function changeImage() {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = 'block';
};