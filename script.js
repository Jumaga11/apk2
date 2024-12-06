// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const sidebar   = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});






/** ----------------------------------------------------------------------
 * VOY A TRABAJAR LO QUE TENGO QUE HACER DE JAVASCRIPT SOBRE ESTE BLOQUE
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
-------------------------------------------------------------------------*/