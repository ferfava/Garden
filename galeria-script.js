// Variables
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

console.log(images.length)

// Función para mostrar la imagen siguiente con animación
function showNextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateGalleryWithAnimation();
}

// Función para mostrar la imagen anterior con animación
function showPrevImage() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1;
  }
  updateGalleryWithAnimation();
}

// Función para actualizar la galería con animación
function updateGalleryWithAnimation() {
  const offset = -currentIndex * 100;
  gallery.style.transform = `translateX(${offset}%)`;
  gallery.style.transition = 'transform 0.5s ease-in-out';
}

// Elimina la animación cuando se complete la transición
//gallery.addEventListener('transitionend', () => {
//  gallery.style.transition = 'none';
// });

// Escuchar eventos para navegación
document.querySelector('.next-button').addEventListener('click', showNextImage);
document.querySelector('.prev-button').addEventListener('click', showPrevImage);
