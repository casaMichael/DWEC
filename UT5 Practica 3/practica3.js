function recogerDatos() {
  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let correo = document.getElementById("correo").value;
  let edad = document.getElementById("edad").value;
  let pass = document.getElementById("pass").value;

  let sexo = "";
  let orientacionHombre = document.getElementById("hombre");
  let orientacionMujer = document.getElementById("mujer");
  if (orientacionHombre.checked) {
    sexo = orientacionHombre.value;
  } else {
    sexo = orientacionMujer.value;
  }

  //Variable en la que almacena dentro del array deportes favoritos
  let deporteFavorito = [];
  let deporteFutbol = document.getElementById("futbol");
  let deporteVoley = document.getElementById("voley");
  let deporteBaloncesto = document.getElementById("baloncesto");
  if (deporteFutbol.checked) {
    deporteFavorito.push(deporteFutbol.value);
  }
  if (deporteVoley.checked) {
    deporteFavorito.push(deporteVoley.value);
  }
  if (deporteBaloncesto.checked) {
    deporteFavorito.push(deporteBaloncesto.value);
  }
  let mensajeFinal =
    "Su nombre es " +
    nombre +
    "<br>su número de telefono " +
    telefono +
    "<br> correo electronico: " +
    correo +
    "<br> Su edad es de " +
    edad +
    "<br> Su contraseña es " +
    pass +
    "<br> Eres " +
    sexo +
    "<br> Y tus deportes favoritos son: ";
  //En este bucle recorre y almacena deportes para luego mostrarlos.
  for (let i = 0; i < deporteFavorito.length; i++) {
    const element = deporteFavorito[i];

    mensajeFinal += element + " ";
  }

  document.getElementById("formulario").addEventListener("click", function () {
    document.getElementById("zonadatos").innerHTML = mensajeFinal;
  });
}
