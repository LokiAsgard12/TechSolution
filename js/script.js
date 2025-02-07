// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Scroll animations
window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.service-card, .testimonial, .team-member');
  elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const screenHeight = window.innerHeight / 1.3;
      if (position < screenHeight) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
      }
  });
});

// Form submission alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
  this.reset();
});

// Initialize Swiper for Services
new Swiper('.services-carousel', {
  loop: true,
  spaceBetween: 20,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
  }
});

// Initialize Swiper for Clients
new Swiper('.clients-carousel', {
  loop: true,
  spaceBetween: 20,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  breakpoints: {
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 }
  }
});

// Initialize Swiper for Testimonials
new Swiper('.testimonials-carousel', {
  loop: true,
  spaceBetween: 20,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  breakpoints: {
      640: { slidesPerView: 1 },
      1024: { slidesPerView: 2 }
  }
});
// Animasi Scroll (Fade-in)
const fadeInElements = document.querySelectorAll('.fade-in');

const scrollFadeIn = () => {
  fadeInElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.3;
    if (position < screenHeight) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', scrollFadeIn);
scrollFadeIn(); // Panggil saat halaman dimuat

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
