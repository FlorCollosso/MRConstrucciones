

//Buscador de Contenido

//Ejecutando Funciones
var flag = true;
document.getElementById("icon-search").addEventListener("click", () => {
  if (flag) {
    mostrar_buscador();
  } else {
    ocultar_buscador();
  }
});
document.getElementById("ctn-cover-search").addEventListener("click", ocultar_buscador);

//Declarando Variables

bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("ctn-cover-search");
input_search = document.getElementById("inputSearch");
box_search = document.getElementById("boxSearch");


//Función para mostrar el buscador

function mostrar_buscador() {
  bars_search.style.top = "4vw";
  cover_ctn_search.style.display = "block";
  input_search.focus();
  flag = false;
}

//Función para ocultar el Buscador

function ocultar_buscador() {
  bars_search.style.top = "-9vw";
  cover_ctn_search.style.display = "none";
  input_search.value = "";
  flag = true;
}

//Animación de la seección Valores

document.getElementById("divRapidez").addEventListener("mouseenter", () => {
  document.getElementById("divRapidez").classList.remove("animacion");

});

//Animación de la sección Nosotros

let hrAnimado = document.getElementById("hrAnimacion");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  let alturaHrAnimado = hrAnimado.offsetTop;
  if (alturaHrAnimado + 200 < scrollTop) {
    hrAnimado.classList.add("hrAnimacion")
  }
}

window.addEventListener('scroll', mostrarScroll);

//La página vuelve al inicio cuando recarga

//$(window).on('beforeunload', function() {
  //window.setTimeout(function() {
   //$(window).scrollTop(0); 
//}, 0);
//});

//Botón Enviar

let boton = document.querySelector('.boton');
let botonTexto = document.querySelector('.tick');

const tickMark = "<svg width=\"48\" height=\"35\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

botonTexto.innerHTML = "Enviar";

boton.addEventListener('click', function(e) {
  e.preventDefault()

  if (botonTexto.innerHTML !== "Enviar") {
    botonTexto.innerHTML = "Enviar";
  } else if (botonTexto.innerHTML === "Enviar") {
    botonTexto.innerHTML = tickMark;
  }
  this.classList.toggle('boton__circulo');
});