document.addEventListener('DOMContentLoaded', function() {

  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlay-image');

  function showOverlay(event) {
    const originalSrc = event.target.getAttribute('data-original-src');
    console.log(overlay);
    console.log(originalSrc);
    if (originalSrc) {
      overlayImage.src = originalSrc;
      overlay.style.display = 'flex';
    }
  }

  function hideOverlay() {
    overlay.style.display = 'none';
    overlayImage.src = '';
  }

  const clickableImages = document.querySelectorAll('.clickable');
  clickableImages.forEach(image => {
    image.addEventListener('click', showOverlay);
  });

  overlay.addEventListener('click', hideOverlay);
});

