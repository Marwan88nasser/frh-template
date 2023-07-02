// Initialize Swiper Slider
// Set Landing Page Slider
const swiperElement = document.querySelector(".landing-swiper")
const swiper = new Swiper(swiperElement, {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  speed: 700,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiper2 = new Swiper(".swiper-design", {
  spaceBetween: 10,
  slidesPerView: "auto",
  centeredSlides: true,
  slidesPerView: 1,
});

// Start set config of AOS Library
AOS.init();

// Start Text More
if (document.querySelectorAll('#text-more #text')) {
  let oldContent = '';
  document.querySelectorAll('#text-more #text').forEach(text => {
    oldContent = text.textContent;
    text.innerHTML = text.textContent.substr(0, 160) + '...';
  })
}

// set chart js bar
if (document.getElementById('myChart')) {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['', '', '', '', '', ''],
      datasets: [{
        label: '',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: 'rgba(217, 217, 217, 0) 100%);'
      }]
    },
  });
}