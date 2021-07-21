(function () {
  const formulario = document.getElementById("formulario"),
    txtNombre = formulario.txtNombre,
    txtEmail = formulario.txtEmail,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById("error");

  function validarNombre(e) {
    if (txtNombre.value == "" || txtNombre.value == null) {
      error.style.display = "block";
      error.innerHTML =
        error.innerHTML + "<li>Por favor ingrese un nombre correcto</li>";
      e.preventDefault();
    } else {
      error.style.display = "none";
    }
  }
  function validarEmail(e) {
    if (txtEmail.value == "" || txtEmail.value == null) {
      error.style.display = "block";
      error.innerHTML =
        error.innerHTML + "<li>Por favor ingrese un correo correcto</li>";
      e.preventDefault();
    } else {
      error.style.display = "none";
    }
  }
  function validarSexo(e) {
    if (sexo.value == "" || sexo.value == null) {
      error.style.display = "block";
      error.innerHTML =
        error.innerHTML + "<li>Por favor seleccione un sexo</li>";
      e.preventDefault();
    } else {
      error.style.display = "none";
    }
  }
  function validarTerminos(e) {
    if (terminos.checked == false) {
      error.style.display = "block";
      error.innerHTML =
        error.innerHTML +
        "<li>Por favor acepte los terminos y condiciones</li>";
      e.preventDefault();
    } else {
      error.style.display = "none";
    }
  }
  function validarFormulario(e) {
    error.innerHTML = "";
    validarNombre(e);
    validarEmail(e);
    validarSexo(e);
    validarTerminos(e);
  }

  formulario.addEventListener("submit", validarFormulario);
})();
