
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

var btn = document.getElementById("nav-bar");
var hdr = document.getElementById("header");
var show = function show() {
  if (btn.style.display == "block") {
    btn.style.display = "none";
    hdr.style.height = "70px";
  } else {
    btn.style.display = "block";
    hdr.style.height = "auto";
  }

};
var check = function check() {
  if (window.innerWidth > 825) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
    hdr.style.height = "70px";
  }
};

var hide = function hide() {
  if (window.innerWidth < 826) {
    btn.style.display = "none";
    hdr.style.height = "70px";
  }
};