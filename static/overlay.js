document.addEventListener('DOMContentLoaded', function() {

  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlay-image');
  const prevImage = document.getElementById('prev-image');
  const nextImage = document.getElementById('next-image');

  let img = {};

  function showImage(i) {
    img.index = (i + img.count) % img.count;
    let num = img.count > 1 ? String(img.index + 1).padStart(2, '0') : '';
    overlayImage.src = `${img.name}${num}.${img.extension}`;
    overlayImage.alt = img.alt[img.index];
  }

  function showOverlay(e) {
    img = {
      name: e.target.getAttribute('data-name'),
      extension: e.target.getAttribute('data-extension'),
      count: parseInt(e.target.getAttribute('data-count'), 10),
      index: parseInt(e.target.getAttribute('data-index'), 10) - 1,
      alt: JSON.parse(e.target.getAttribute('data-alt'))
    }

    if (img.count > 1) {
      prevImage.style.display = 'block';
      nextImage.style.display = 'block';
    } else {
      prevImage.style.display = 'none';
      nextImage.style.display = 'none';
    }

    showImage(img.index);
    overlay.style.display = 'flex';
  }

  function hideOverlay() {
    overlay.style.display = 'none';
    overlayImage.src = '';
    img = {};
  }

  document.querySelectorAll('.clickable').forEach(image => image.addEventListener('click', showOverlay));
  overlay.addEventListener('click', hideOverlay);

  prevImage.addEventListener('click', function(event) {
    event.stopPropagation();
    showImage(img.index - 1);
  });

  nextImage.addEventListener('click', function(event) {
    event.stopPropagation();
    showImage(img.index + 1);
  });

});
