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
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}






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