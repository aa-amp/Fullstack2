document.addEventListener("DOMContentLoaded", function() {

  // Validacioon del rut
  function limpiarRut(rut) {
    return rut.replace(/[.\-]/g, "").toUpperCase();
  }

  function validarRut(rutCompleto) {
    const rut = limpiarRut(rutCompleto);
    if (!/^[0-9]+[0-9K]$/.test(rut)) return false;

    const cuerpo = rut.slice(0, -1);
    const dv = rut.slice(-1);

    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo.charAt(i), 10) * multiplo;
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    let dvEsperado = 11 - (suma % 11);
    if (dvEsperado === 11) dvEsperado = "0";
    else if (dvEsperado === 10) dvEsperado = "K";
    else dvEsperado = dvEsperado.toString();

    return dv === dvEsperado;
  }

  function procesarLogin() { //esto se ejecuta al enviar formulario
    const inputRut = document.getElementById("rut");
    const inputPass = document.getElementById("clave");

    if (!validarRut(inputRut.value)) {
      alert("⚠️ El RUT ingresado no es válido. Intenta nuevamente.");
      return false;
    }

    inputRut.value = limpiarRut(inputRut.value);

    inputPass.value = SHA1(inputPass.value);

    return true;
  }

  function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/;
    return regex.test(correo);
  }

  document.getElementById("rut").addEventListener("input", function() {

    const rutValido = validarRut(this.value);
    if (this.value.length > 1) { // Solo mostrar feedback si hay suficiente texto
      if (rutValido) {
        this.style.borderColor = "green";  // Opcional: borde verde si es válido
      } else {
        this.style.borderColor = "red";    // Opcional: borde rojo si es inválido
      }
    } else {
      this.style.borderColor = ""; // Sin borde si está vacío o incompleto
    }
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
    if (!validarRut(rut)) errores.push("RUT inválido.");

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
