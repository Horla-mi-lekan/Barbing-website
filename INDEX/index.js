let buttonTap = document.querySelector(".btn-tap")
let navBar = document.querySelector(".nav-itemss")
let navLink = document.querySelector("#nav-link")
let navLinkk = document.querySelector("#nav-links")
let navLinks = document.querySelector("#nav-linkks")
let navLinkss = document.querySelector("#nav-linkss")
let navLinkkss = document.querySelector("#nav-linkkss")

buttonTap.addEventListener("click", () => {
  navBar.style.display = "block";
})
navLink.addEventListener("click", () => {
  navBar.style.display = "none"
})
navLinkk.addEventListener("click", () => {
  navBar.style.display = "none"
})
navLinks.addEventListener("click", () => {
  navBar.style.display = "none"
})
navLinkss.addEventListener("click", () => {
  navBar.style.display = "none"
})
navLinkkss.addEventListener("click", () => {
  navBar.style.display = "none"
})

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
 