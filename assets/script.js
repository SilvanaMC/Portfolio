document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

   // Función para validar el formulario
   function validateForm() {
    // Obtener los valores de los campos
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Validación de Nombre Completo
    let valid = true;
    if (fullName === "") {
      document.getElementById("nameError").style.display = "block";
      valid = false;
    } else {
      document.getElementById("nameError").style.display = "none";
    }

    // Validación de Correo Electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
      document.getElementById("emailError").style.display = "block";
      valid = false;
    } else {
      document.getElementById("emailError").style.display = "none";
    }

    // Validación de Mensaje
    if (message === "") {
      document.getElementById("messageError").style.display = "block";
      valid = false;
    } else {
      document.getElementById("messageError").style.display = "none";
    }

    // Retorna 'false' si hay errores para evitar el envío del formulario
    return valid;
  }