function generarTablas() {
  let numero = parseInt(document.getElementById("txtNumero").value);
  let contenedor = document.getElementById("divContenedor");
  let contenido = "";

  if (isNaN(numero)) {
    contenedor.innerHTML = "<div class='error'>⚠️ Por favor ingresa un número</div>";
    return;
  }
  contenido += "<h1>🔢 Tabla del " + numero + "</h1>";
  contenido += "<p class='subtitulo'>¡Aquí está tu tabla!</p>";
  contenido += "<div class='divisor'></div>";
  contenido += "<div class='tabla'>";

  for (let i = 1; i <= 12; i++) {
    contenido += "<div class='fila'><span>" + numero + " x " + i + " =</span><span>" + (numero * i) + "</span></div>";
  }

  contenido += "</div>";
  contenido += "<br><div class='estrellas'>⭐ 🌙 ⭐</div>";

  contenedor.innerHTML = contenido;

}
