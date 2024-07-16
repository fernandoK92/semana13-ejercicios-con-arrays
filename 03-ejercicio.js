'use strict';
function palabrasMasDeTresLetras(frase) {
    const palabras = frase.split(" ");
    const palabrasMasDeTres = palabras.filter(palabra => palabra.length > 3);
    return palabrasMasDeTres;
}

// Ejemplo de uso
let frase = "Me encanta la velocidad y el diseño de los carros; cada modelo tiene una historia fascinante y una ingeniería impresionante.";
let palabrasResultado = palabrasMasDeTresLetras(frase);
alert(palabrasResultado); 
