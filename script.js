document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-img');
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const leftArrow = document.querySelector('.lightbox-arrow.left');
  const rightArrow = document.querySelector('.lightbox-arrow.right');

  let currentIndex = 0;

  const showImage = (index) => {
    const imgSrc = galleryImages[index].src;
    lightboxImg.src = imgSrc;
    currentIndex = index;
  };

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      lightboxOverlay.classList.add('active');
      showImage(index);
    });
  });

  const closeLightbox = () => {
    lightboxOverlay.classList.remove('active');
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
      closeLightbox();
    }
  });

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
  });

  document.addEventListener('keydown', (e) => {
    if (lightboxOverlay.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        leftArrow.click();
      } else if (e.key === 'ArrowRight') {
        rightArrow.click();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    }
  });
});
