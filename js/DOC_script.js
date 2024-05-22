// Inicializar el slideIndex a 1 y llamar a la función showSlides con el valor de slideIndex.
let slideIndex = 1;
showSlides(slideIndex);

// Esta función recvibe como pàrametro n y llama a la función showSlides con el valor de slideIndex igual al valor de slideIndex más n.
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Esta función recibe como parametro n y llama a la función showSlides con el valor de slideIndex igual a n.
function currentSlide(n) {
    showSlides((slideIndex = n));
}

// Esta función se encarga de mostrar las imágenes de los slides. Para ello, recibe un parámetro n que indica el número de slide que se debe mostrar. Si n es mayor que el número de slides, se establece slideIndex a 1. Si n es menor que 1, se establece slideIndex al número de slides. A continuación, se ocultan todas las imágenes de los slides y se eliminan las clases active de los puntos. Finalmente, se muestra la imagen correspondiente al slideIndex y se añade la clase active al punto correspondiente.
function showSlides(n) {
    // Guardamos en una varible slides todos los elementos con la clase mySlides.
    const slides = document.getElementsByClassName("mySlides");

    // Guardamos en una variable dots todos los elementos con la clase dot.
    const dots = document.getElementsByClassName("dot");

    // Si n es mayor que el número de slides, se establece slideIndex a 1.
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Si n es menor que 1, se establece slideIndex al número de slides.
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Ocultamos todas las imágenes de los slides y eliminamos las clases active de los puntos.
    Array.from(slides).forEach((slide) => {
        slide.style.display = "none";
    });

    // Eliminamos las clases active de los puntos.
    Array.from(dots).forEach((dot) => {
        dot.classList.remove("active");
    });

    // Mostramos la imagen correspondiente al slideIndex y añadimos la clase active al punto correspondiente.
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
