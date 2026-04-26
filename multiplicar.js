function generarTablas(){
    let contenedor= document.getElementById("divContenedor");
    
    let contenido= "";
   
    for(let i = 1; i <= 12; i++){
        contenido += "<div class='fila'><span>3 x " + i + " =</span><span>" + (3 * i) + "</span></div>";
    }
    for(let i = 1; i <= 12; i++){
        contenido += "<div class='fila'><span>5 x " + i + " =</span><span>" + (5 * i) + "</span></div>";
        
    }
        contenedor. innerHTML= contenido;
        
}
