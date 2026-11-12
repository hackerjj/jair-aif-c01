// Candado simple: si no hay sesión abierta en esta pestaña, regresa al inicio para pedir contraseña.
(function () {
  if (sessionStorage.getItem("jair-auth") !== "ok") {
    document.documentElement.style.visibility = "hidden";
    location.replace("index.html");
  }
})();
