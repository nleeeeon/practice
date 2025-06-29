document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const captionEl = document.getElementById('lightbox-caption');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const closeBtn = document.getElementById('lightbox-close');

  let images = [];
  let current = 0;

  document.querySelectorAll('.gallery-img').forEach((img) => {
    img.addEventListener('click', () => {
      const gallery = img.closest('.media-gallery');
      images = Array.from(gallery.querySelectorAll('.gallery-img'));
      current = images.indexOf(img);
      render();
      lightbox.style.display = 'flex';
    });
  });

  function render() {
    const img = images[current];
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    captionEl.textContent = img.alt;
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    render();
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    render();
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.style.display = 'none';
  });
});
