function login() {
    var email = document.getElementById("email").value; 
    var password = document.getElementById("password").value; 

    if (email === "" || password === "") { 
    document.getElementById("error-message").textContent =
    "Por favor, ingrese un correo electrónico y una contraseña válidos."; 
    } else if (email === "usuario@example.com" &&
   password === "contraseña") {

     // Autenticación exitosa

     document.getElementById("error-message").textContent="";
     alert("¡Inicio de sesion exitoso!");
     // Aquí puedes redirigir al usuario o realizar otras acciones después de iniciar sesión
   }
   else {
    // Autenticación fallida
    document.getElementById("error-message").textContent =
    "ERROR: La contraseña que has escrito para el usuario es incorrecta. Intente de nuevo."; 
}
 
 

















}
