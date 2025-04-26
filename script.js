const images = [
    'images/brew1.jpg',
    'images/brew2.jpg',
    'images/brew3.jpg',
    'images/brew4.jpg',
  ];
  
  let current = 0;
  const heroImg = document.getElementById('hero-photo');
  
  setInterval(() => {
    heroImg.style.opacity = 0;
  
    setTimeout(() => {
      current = (current + 1) % images.length;
      heroImg.src = images[current];
      heroImg.style.opacity = 1;
    }, 600); // Match fade-out duration
  }, 3000); // 3 seconds between image changes

  const aboutSection = document.querySelector('.about-container');
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.3 });

  aboutObserver.observe(aboutSection);

  const gallery = document.getElementById('coffeeGallery');
  gallery.innerHTML += gallery.innerHTML; // Duplicate for seamless scroll



  document.addEventListener("DOMContentLoaded", function () {
    const animatedEls = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, {
      threshold: 0.15
    });

    animatedEls.forEach(el => observer.observe(el));
  });


  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.coffee-card');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, index * 100); // Delay for staggered effect
          observer.unobserve(entry.target); // Stop watching after it appears
        }
      });
    }, {
      threshold: 0.1
    });
  
    cards.forEach(card => {
      observer.observe(card); // Watch all .coffee-card elements
    });
  });

  document.querySelector('.coffee-btn').addEventListener('click', function() {
    window.location.href = 'menu.html'; // Change this to your menu page URL
  });
  
  
  