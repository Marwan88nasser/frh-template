// Show Password
function showPass(ele) {
  var inp = document.querySelector(ele);
  if (inp.type === "password") {
    inp.type = "text";
  } else {
    inp.type = "password";
  }
}

// landing-slider
var swiper = new Swiper(".landing-slider", {
  slidesPerView: 1.05,
  spaceBetween: 7,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});