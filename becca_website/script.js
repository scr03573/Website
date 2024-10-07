document.addEventListener("DOMContentLoaded", () => {
    // Example of simple JS to toggle video play/pause
    const video = document.getElementById('hero-video');
    
    video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  
    // Example: Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });