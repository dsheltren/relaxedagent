$(document).ready(function() {
  $(".hero-slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false
  });
  const div = document.getElementById("hero-testimonial-wrapper");
  div.style.opacity = "1";
  div.style.transform = "translateY(10px)";
});
