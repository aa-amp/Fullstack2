document.addEventListener("DOMContentLoaded", function() {

  function validarRut(rut) {
    const regex = /^[0-9]{7,8}-[0-9Kk]$/;
    return regex.test(rut);
  }

  function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/;
    return regex.test(correo);
  }

  document.getElementById("rut").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9Kk-]/g, "");
  });

  document.getElementById("nombre").addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
  });

  document.getElementById("apellido").addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
  });

  const form = document.getElementById("registroForm");
  const errorGeneral = document.getElementById("errorGeneral");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();
    const rut = document.getElementById("rut").value.trim();

    let errores = [];

    if (nombre === "") errores.push("Debe ingresar el nombre.");
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) errores.push("El nombre solo puede contener letras.");
    if (apellido === "") errores.push("Debe ingresar el apellido.");
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) errores.push("El apellido solo puede contener letras.");
    if (!validarCorreo(correo)) errores.push("Correo inválido. Debe ser usuario@duocuc.cl.");
    if (password.length < 6) errores.push("Contraseña debe tener al menos 6 caracteres.");
    if (!validarRut(rut)) errores.push("RUT inválido. Formato: 12345678-9");

    if (errores.length > 0) {
      errorGeneral.innerHTML = errores.join("<br>");
      errorGeneral.style.display = "block";
    } else {
      errorGeneral.style.display = "none";
      form.reset();
      window.location.href = "micuenta.html";
    }

  });

});
