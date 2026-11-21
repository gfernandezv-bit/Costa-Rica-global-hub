
/* Preguntas frecuentes */

const preguntas = document.querySelectorAll(".faq-pregunta");

preguntas.forEach(function(pregunta) {

    pregunta.addEventListener("click", function() {

        const elemento = pregunta.parentElement;

        elemento.classList.toggle("activa");

        const abierta = elemento.classList.contains("activa");

        pregunta.setAttribute("aria-expanded", abierta);

    });

});



/* Menú hamburguesa */

const botonMenu = document.querySelector("#boton-menu");
const menuPrincipal = document.querySelector("#menu-principal");

if (botonMenu && menuPrincipal) {

    botonMenu.addEventListener("click", function () {

        menuPrincipal.classList.toggle("abierto");

        const abierto = menuPrincipal.classList.contains("abierto");

        botonMenu.setAttribute("aria-expanded", abierto);

    });

}

menuPrincipal.classList.toggle("abierto");
botonMenu.classList.toggle("activo");

// Botón para volver al inicio
const botonScroll = document.getElementById("scroll-top");


// Mostrar el botón cuando bajamos por la página
window.addEventListener("scroll", function () {

    if (window.scrollY > 2200) {
        botonScroll.style.display = "block";
    } else {
        botonScroll.style.display = "none";
    }

});

// Regresar al inicio al hacer clic
botonScroll.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

