//Add this code to your js file
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = 'none'));
  slides[index].style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// initialize
showSlide(currentIndex);

// Autoplay (switch images every 3 seconds)
setInterval(nextSlide, 3000);
(Initializes the slide index)
let slideIndex = 1;
// Switch the slide forward or backward
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Switch to a slide with a specific index
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Shows slides for a specific index
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  // The processing loop switches, returning to the first slide if you exceed the number of slides
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
