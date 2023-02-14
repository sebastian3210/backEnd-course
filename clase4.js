
/** 
// ejemplo de callback usando map

let valoresOriginales = [1,2,3,4,5,6,7,8,9,10,11];
// Estamos acostumbrados a leer una funcion map de la siguiente forma:
let valoresNuevos = valoresOriginales.map(x=>x+1)
console.log(valoresNuevos)

//Sin embargo lo que metemos dentro de la funcion map es uan funcion(flecha, mas especificamente), que infica que se sume en
//1 el valor del numero que este en el arreglo
//¿Siempre tenemos que sumar 1? no! nosotros podemos meter la operacion que queramos, y map la ejecutara de manera interna!

let otrosValores = valoresOriginales.map(x=>x*2); // otrosValores tendra
console.log(otrosValores)
let masValores = valoresOriginales.map(x=> 'a')
console.log(masValores)

// Notamos que, no importa cuanto cambie la funcion que este metiendo dentro de map, map esta hecho para RECIBIR UNA FUNCION
//COMO PARAMETRO y poder ejecutarla cuando lo considere pertinente. Ahora si estructuramos el callback por fuera.

const funcionCallback = (valor) =>{ // funciona que evalua si el valor del arreglo es un numero par
    if(valor %2===0){
        return valor
    } else{
        return 'no es par'
    }
}
const evaluacionDePares = valoresOriginales.map(funcionCallback); // Estoy pasando la funcion completa como argumento de la funcion map
console.log(evaluacionDePares);// el resultado sera ['no es par', 2,'no es par',4,' no es par']
*/

// Ejemplo de recreacion interna de funcion map para localizar su callback
// usaremos el arreglo de prueba
let arregloDePrueba = [1,2,3,4,5];
const miFuncionMap = (arreglo, callback) => {
    let nuevoArreglo = []
    for(let i=0; i<arreglo.length; i++){
        let nuevoValor = callback(arreglo[i]); // Nota como, el callback que recibi aqui arriba lo estoy ejecutando en este punto (callback)
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}

// pongamos en comparacion nuestra nueva funcion CON UN CALLBACK y la funcion map
let nuevoArregloPropio = miFuncionMap(arregloDePrueba, x=> x*2); // el nuevo arreglo sera : [2,4,6,8,10]
let nuevoArregloConMap = arregloDePrueba.map(x=>x*2); // el arreglo sera : [2,4,6,8,10]
console.log(nuevoArregloPropio);
console.log(nuevoArregloConMap);

//Nota que no hay diferencia. Acabamos de recrear la funcion map para entender su funcionamiento interno y viendo -->
// DONDE esta utilizando el callback que enviamos como parametro

// EXTRA: si queremos que la funcion se ejecute sobre el mismo arreglo y no tener que pasarlo como parametro, debemos agregar -->
// nuestra nueva funcion en el prototipo del objeto Array.

Array.prototype.miPropiaFuncionMap = function(callback){
    let nuevoArreglo = [];
    for(let i = 0; i<this.length;i++){
        let nuevoValor = callback(this[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}
let arregloPrueba = [1,2,3,4,5];
let nuevosValores = arregloPrueba.miPropiaFuncionMap(x=>x+1)

console.log(arregloPrueba);
console.log(nuevosValores);


const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;


const realizarOperacion =(numero1, numero2, callback) =>{
    console.log('voy a realizar una operacion pero no se cual hare');
    let resultado = callback(numero1, numero2);
    // no sabemos cual de las 4 funciones sera, nosotros solo la ejecutamos y devolvemos le resultado
    console.log(`el resultado de la operacion que no supe cual fue es : ${resultado} `);
}

realizarOperacion(2,5,sumar);
realizarOperacion(2,5,restar);
realizarOperacion(2,5,multiplicar);
realizarOperacion(2,5,dividir);



