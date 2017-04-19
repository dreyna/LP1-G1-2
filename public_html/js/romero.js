var nav = false;
function mostrar_ocultar_barra(id) {
    var barra = document.getElementById(id);

    if (nav === false) {
        barra.style.display = "block";
        nav = true;
    } else {
        barra.style.display = "none";
        nav = false;
    }
}
