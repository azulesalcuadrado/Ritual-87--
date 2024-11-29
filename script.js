// Seleccionar el botón
const btnArriba = document.getElementById("btnArriba");

// Mostrar el botón cuando el usuario se desplaza hacia abajo
window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnArriba.style.display = "flex";
  } else {
    btnArriba.style.display = "none";
  }
};

// Volver al inicio de la página al hacer clic
btnArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
