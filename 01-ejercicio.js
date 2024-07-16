let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];

function buscarNombreEnLista(nombres, nombreABuscar) {
    const resultado = nombres.filter(nombre => nombre === nombreABuscar);
    if (resultado.length > 0) {
        alert("Si se encuentra");
    } else {
        alert("No se encuentra");
    }
}


buscarNombreEnLista(students, "Maria"); 
buscarNombreEnLista(students, "Luis");  


