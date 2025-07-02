const images = document.querySelectorAll('.gallery figure img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = document.getElementById('closeBtn');

images.forEach((img) => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });

  // Параллакс ефект на фото
  img.addEventListener('mousemove', e => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 8;
    const rotateY = (x / rect.width) * 8;
    img.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
  });
});

// Закриття лайтбокса
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

