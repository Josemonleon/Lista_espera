const fs = require('fs');
let readlineSync = require('readline-sync');



/**
 * Función que añade el nombre de un cliente al final de la lista de espera.
 * @param {Array} lista Lista de espera.
 * @param {string} nombreCliente Nombre del nuevo cliente.
 * @returns {Array} Devuelve el array de la lista más el cliente nuevo añadido.
 */
function agregaCliente1(lista,nombreCliente){
    
    lista.push(nombreCliente);
    console.log(nombreCliente+' ha sido agregado/a con éxito. ');
    return lista;
}


/**
 * Función que elimina el primer nombre del array.
 * @param {Array} lista Lista de espera.
 * @returns {Array} Devuelve el array con el primer nombre eliminado.
 */
function clienteOcupaMesa2(lista){

    lista.shift();
    return lista;
}

/**
 * Función que elimina el nombre del array que se haya escrito previamente por teclado.
 * @param {Array} lista Lista de espera.
 * @param {string} nombreCliente Nombre del cliente que se quiere eliminar.
 * @returns {Array} Array con el nombre indicado en nombreCliente eliminado.
 */
function borraCliente3(lista,nombreCliente){
    console.log('Se ha eliminado a '+nombreCliente+' de la lista. ');
    lista.splice(lista.indexOf(nombreCliente),1);
    return lista;

}

/**
 * Función que muestra la posición del cliente en el array (el +1 es para compensar la base 0 del array).
 * @param {Array} lista Lista de espera.
 * @param {string} nombreCliente 
 */
function turnoCliente4(lista,nombreCliente){

console.log(nombreCliente+' está en la posición '+(lista.indexOf(nombreCliente)+1));    
}

/**
 * Función que muestra el estado de la lista de espera en el momento de llamar a la función.
 * @param {Array} lista Lista de espera.
 */
function verLista5(lista){
    console.log(lista);
}


let introduceNum;
let listaEspera = new Array(); //Array donde se guarda la lista de espera.
let escribeNombre; //Variable para añadir cada vez el nombre del cliente nuevo.
let eliminaCliente;
let consultaPosicion;
let compruebaCliente1 = false;
let compruebaCliente3 = false;
let compruebaCliente4 = false;

do{

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('LISTA DE ESPERA - Restaurante Florida\'\s Hollywood')
console.log('===================================================')
console.log(' 1. Agregar nuevo cliente a la lista. ');
console.log(' 2. Siguiente cliente ocupa mesa. ');
console.log(' 3. Borrar cliente impaciente. ');
console.log(' 4. Ver turno de cliente. ');
console.log(' 5. Ver estado de la lista de espera. ');
console.log(' 6. Guardar la lista de espera. ');
console.log(' 7. Recuperar la lista de espera. ')
console.log(' 8. Salir del programa. ');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////



    introduceNum = readlineSync.questionInt('Introduce opción (1..8): ') //Selecciona la opción del menú.
    switch (introduceNum){
        case 1: //Si pulsamos 1, en el array "listaEspera" se añade al final un nombre nuevo.
                    escribeNombre = readlineSync.question('Indica el nombre del cliente: ');
                    escribeNombre = escribeNombre.toUpperCase();
            for (let i=0; i<listaEspera.length;i++){
                    if (listaEspera[i]==escribeNombre){ //Comprueba si hay dos clientes con el mismo nombre.
                        console.log('Ya hay un cliente con ese nombre en la lista. No se puede agregar. ');
                        compruebaCliente1 = true;
                    }
            }
            if (compruebaCliente1 == false){
            listaEspera = agregaCliente1(listaEspera,escribeNombre);
            console.log(listaEspera);
            }
            break;

        case 2: //Si pulsamos 2, en el array "listaEspera" se elimina el primer nombre [0].
            console.log(listaEspera[0]+' debe ocupar su mesa. ');
            console.log(listaEspera[0]+' ha sido eliminado de la lista. ');
            listaEspera = clienteOcupaMesa2(listaEspera);
            console.log(listaEspera);
            break;

        case 3: //Si pulsamos 3, el array "listaEspera" elimina el nombre que se haya introducido por teclado.
            eliminaCliente = readlineSync.question('Introduce el nombre del cliente que quieres borrar de la lista de espera. ');
            eliminaCliente = eliminaCliente.toUpperCase();
            for (let i=0; i<listaEspera.length;i++){
                /*Recorremos todo el array leyendo los nombres. Comparamos cada uno de los nombres con el nombre escrito por telcado.
                Si el nombre escrito por teclado no coincide con ninguno de los del array no ejecuta la función.*/
                    if (listaEspera[i] == eliminaCliente){   
                        listaEspera = borraCliente3(listaEspera,eliminaCliente);
                        console.log(listaEspera);
                        compruebaCliente3 = true;
                    }
            }
            if (compruebaCliente3 == false){    //Si el nombre no corresponde a un cliente se muestra un mensaje indicandolo.
                console.log(eliminaCliente+' no existe en la lista.');
            }
            break;

        case 4: //Si pulsamos 4, nos muestra por terminal la posición del cliente que hayamos introducido por teclado.
            consultaPosicion = readlineSync.question('Nombre del cliente a consultar: ');
            consultaPosicion = consultaPosicion.toUpperCase();
            for (let i=0; i<listaEspera.length;i++){
                /*Recorremos todo el array leyendo los nombres. Comparamos cada uno de los nombres con el nombre escrito por telcado.
                Si el nombre escrito por teclado no coincide con ninguno de los del array no ejecuta la función.*/
                    if (listaEspera[i] == consultaPosicion){   
                        turnoCliente4(listaEspera,consultaPosicion);
                        compruebaCliente4 = true;
                    }
            }
            if (compruebaCliente4 == false){    //Si el nombre no corresponde a un cliente se muestra un mensaje indicandolo.
                console.log(consultaPosicion+' no existe en la lista. ');
            }
            break;

        case 5: //Si pulsamos 5, muestra el estado de la lista de espera.
            console.log('Visualizo lista: ');
            verLista5(listaEspera);
            break;

        case 6: //Guarda el string en un fichero "lista.txt"
            let file = fs.openSync('lista.txt', 'a');
            fs.writeSync(file, listaEspera, undefined, 'utf-8');
            break;

        case 7:
        let lines = fs.readFileSync(file, 'utf8');

    }
    direction = readlineSync.keyIn('Introduce <ESPACIO> para continuar. ', {limit: ' '});
    
console.clear();
}while (introduceNum !=8);
console.log('                           ');
console.log('El programa ha finalizado. ');
console.log('                           ');
