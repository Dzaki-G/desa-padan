// Inisialisasi Swiper.js
const swiper = new Swiper('.hero-swiper', {
    loop: true, // Loop slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000, // Slide setiap 5 detik
      disableOnInteraction: false,
    },
    effect: 'slide', // Efek transisi slide (default)
  });
  