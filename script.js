document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-img');
  const lightbox      = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const captionEl     = document.getElementById('lightbox-caption');
  const prevBtn       = document.getElementById('lightbox-prev');
  const nextBtn       = document.getElementById('lightbox-next');
  const closeBtn      = document.getElementById('lightbox-close');

  // ギャラリーの <img> を配列化
  const images = [...galleryImages];
  let current  = 0;

  // 画像とキャプションをまとめて更新する関数
  function render() {
    const img = images[current];
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    captionEl.textContent = img.alt;
  }

  // 画像クリック → ライトボックス表示
  images.forEach((img, i) =>
    img.addEventListener('click', () => {
      current = i;
      render();
      lightbox.style.display = 'flex';
    })
  );

  // 閉じる
  closeBtn.addEventListener('click', () => (lightbox.style.display = 'none'));

  // 前後移動
  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    render();
  });
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    render();
  });

  // Esc キーで閉じる
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.style.display = 'none';
  });
});
