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
-------------------------------------------------------------------------*/

let currentSlide2 = 0;
const slides2 = document.querySelectorAll('.slide2');

function moveSlide(direction) {
    // Actualizamos el índice de la diapositiva actual
    currentSlide2 = (currentSlide2 + direction + slides2.length) % slides2.length;

    // Calculamos el desplazamiento para mostrar la diapositiva actual
    const offset = -currentSlide2 * 100;

    // Aplicamos la transformación a cada diapositiva
    slides2.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}
