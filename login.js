document.addEventListener("DOMContentLoaded", function() {

  function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/;
    return regex.test(correo);
  }

  const loginForm = document.getElementById("loginForm");
  const errorLogin = document.getElementById("errorLogin");

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const correo = document.getElementById("nombre").value.trim();
    const claveInput = document.getElementById("clave");
    const clave = claveInput.value.trim();

    let errores = [];

    if (!validarCorreo(correo)) errores.push("Correo inválido. Debe ser usuario@duocuc.cl.");
    if (clave.length < 6) errores.push("Clave debe tener al menos 6 caracteres.");

    if (errores.length > 0) {
      errorLogin.innerHTML = errores.join("<br>");
      errorLogin.style.display = "block";
    } else {
      errorLogin.style.display = "none";

      claveInput.value = SHA1(clave);

      window.location.href = "micuenta.html";
    }
  });

});
