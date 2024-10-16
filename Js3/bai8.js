let slideIndex = 0;
showSlides(slideIndex);
function showSlides(index) {
  let slides = document.getElementsByClassName("mySlides");
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
function nextSlide() {
  slideIndex++;
  showSlides(slideIndex);
}
function prevSlide() {
  slideIndex--;
  showSlides(slideIndex);
}
document.querySelector(".left").addEventListener("click", prevSlide);
document.querySelector(".right").addEventListener("click", nextSlide);
