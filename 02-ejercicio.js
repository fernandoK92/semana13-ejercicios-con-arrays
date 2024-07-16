'use strict';
function contarPalabras(frase) {
    // Separar la frase por espacios en blanco para obtener un array de palabras
    const palabras = frase.split(' ');
    // Devolver el número de palabras en el array
    return palabras.length;
}

let phrase = 'La programación web es fundamental para el progreso';

alert(contarPalabras(phrase)); 


