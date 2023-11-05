window.onload = function() {
    var canvas = document.getElementById("lienzo");
    var ctx = canvas.getContext("2d");
   
    var cargaCSV = function(url) {
       var carga = new XMLHttpRequest();
       carga.open("GET", url, false);
       carga.send();
       var csv = carga.responseText;
       var registros = csv.split("\n");
       var puntos = [];
       for (var i = 0; i < registros.length; i++) {
         var fila = registros[i].split(",");
         var punto = { x: fila[0], y: fila[1], z: fila[2] };
         puntos.push(punto);
       }
       return puntos;
    };
   
    var puntos = cargaCSV("datos.csv");
   
    var ancho = window.innerWidth;
    var alto = window.innerHeight;
    canvas.width = ancho;
    canvas.height = alto;
   
    var draw = function() {
       ctx.clearRect(0, 0, ancho, alto);
       ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
       ctx.beginPath();
       for (var i = 0;