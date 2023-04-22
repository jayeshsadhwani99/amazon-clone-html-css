const carouselImages = document.getElementById("carousel-images");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let imageIndex = 0;

function slideImage() {
  carouselImages.style.transform = `translateX(${-imageIndex * 100}%)`;
}

function showNextImage() {
  imageIndex = (imageIndex + 1) % carouselImages.children.length;
  slideImage();
}

function showPrevImage() {
  imageIndex =
    (imageIndex - 1 + carouselImages.children.length) %
    carouselImages.children.length;
  slideImage();
}

prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);

// Optional: Automatically slide images every 3 seconds
setInterval(showNextImage, 3000);
