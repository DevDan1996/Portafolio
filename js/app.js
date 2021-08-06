//? Menu 

((d) => {
    const btnMenu = d.querySelector(".menu-btn");
    const menu = d.querySelector(".menu");

    //* Intercambiar las clases para ocultar el menu
    btnMenu.addEventListener("click", (e) => {
        btnMenu.firstElementChild.classList.toggle("none");
        btnMenu.lastElementChild.classList.toggle("none");
        menu.classList.toggle("is-active");
    });

    //* Al seleccionar un enlace del menu ocultar el menú y cambiar icono del menu
    d.addEventListener("click", e => {
        if (!e.target.matches(".menu a")) return false;
        btnMenu.firstElementChild.classList.remove("none");
        btnMenu.lastElementChild.classList.add("none");
        menu.classList.remove("is-active");
    })
})(document);