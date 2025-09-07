document.addEventListener("DOMContentLoaded", function() {

  function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/;
    return regex.test(correo);
  }

  const boton = document.getElementById("loginBtn");
  const errorLogin = document.getElementById("errorLogin");

  boton.addEventListener("click", function() {
    const correo = document.getElementById("nombre").value.trim();
    const clave = document.getElementById("clave").value.trim();
    let errores = [];

    if (!validarCorreo(correo)) errores.push("Correo inválido. Debe ser usuario@duocuc.cl.");
    if (clave.length < 6) errores.push("Clave debe tener al menos 6 caracteres.");

    if (errores.length > 0) {
      errorLogin.innerHTML = errores.join("<br>");
      errorLogin.style.display = "block";
    } else {
      errorLogin.style.display = "none";
      cifrar(); 
      window.location.href = "micuenta.html"; 
    }
  });

});
