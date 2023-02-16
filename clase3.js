
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
/*
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
 */
/*
// ejemplos de clase de funciones sincronico
function saludar(mensaje){
    console.log(mensaje)
    guardar(mensaje);
}
function tardaMucho(){
    console.log()
}
// funcion no bloqueante
function guardar(texto){
    //guardar el texto
    console.log('guardado')
}

function despedirse(){
    console.log()
}

function main(){
    const nombre = 'sebas'
    saludar(nombre);
    tardaMucho();
    despedirse();
}

main() //invocacion que ejecuta otras funciones.
*/
/*
new Promise(function(resolve,reject){
    setTimeout(()=> resolve(1), 1000)
})
.then(result => {
    console.log(result);
    return result * 2
})
.then(result => {
    console.log(result);
    return result *2
})
.then(result =>{
    console.log(result);
    return result*2
}) */

/*
//  ejemplo de la creacion de una promesa

const dividir = (dividiendo, divisor) => {
    return new Promise((resolve, reject)=>{ //nota que al crear una promise, estamos paseando un callback con dos parametros: resolve y reject
        if(divisor === 0){
            reject('No se pueden hacer divisiones entre cero')
            // rechazamos la operacion porque no es posible trabar con uan division entre cero, no puedo cumplir la promesa de 
            // dividir su numero
        } else{
            resolve(dividiendo/divisor)
            //Si los valores son validos, entonces puedo cumplir su promesa
        }
    })
}
// una vez creada la promesa, es hora de comenzar a utilizar.
dividir(6,2) // llamamos a la funcion
.then(resultado =>{
    console.log(resultado) // en este caso, al no ser division entre 0, la promesa se cumplira
    //programamos le then para recibir cualquier "resolve" por parte de la promesa
    // es decir usamos el then para recibir los casos en los cuales sabemos que la funcion va  a salir bien.
    //el parametro "resultado" sera el valor que devuelva el resolve de la promesa
 })
.catch(error =>{
    console.log(error)
    // programamos tamiben un catch para recibir cualquier "reject" por parte de la promesa
    // es decir usamos el catch para ATRAPAR los errores que nos arroje la promesa, para poder entender la razon por la
    // cual nuestra promesa no pudo cumplirse correctamente.
    //el parametro "error" sera el valor que devuelva el reject dentro de la promesa
})

dividir(5,0)
.then(resultado =>{
    console.log(resultado)
})
.catch(error=>{
    console.log(error)
})

const funcionAsincronica = async() =>{
    //estamos inicializando un entorno completo asincrono, todo lo que este dentro de las llaves de la funcion se comportara
    // como no-bloqueante con el exterior
    try{
        //encerramos la operacion a realizar en un bloque try, porque al ser una proemsa, PODRIA NO CUMPLIRSE, asi que hay que
        // estar prevenidos
        let resultado = await dividir(10,5) // ya no hay .then, ahora solo ESPERAMOS por le resultado de la promesa
        console.log(resultado)
    }
    catch (error){
        //el bloque catch es obligatorio despues de un try{} y sirve igual que el.catch, para poder atrapar errores
        console.log(error)
    }
}
funcionAsincronica();


*/
// hands on lab
// calculadora positiva con promesas



const suma = (num1,num2)=>{
    return new Promise((resolve, reject)=>{
        if(num1 === 0 || num2 ===0){
            reject('la suma no tiene sentido')
        } else{
            resolve(num1 + num2)
        }
    })
}
const resta = (minuendo, sustraendo)=>{
    return new Promise((resolve, reject)=>{
        if(minuendo === 0 || sustraendo === 0){
            reject('operacion invalida')
        } else{
            resolve(minuendo - sustraendo)
        }
        if(resolve >= 0){
            reject('la calculadora solo puede devolver valores positivos')
        }
    })
}

const multiplicacion = (factor1, factor2)=>{
    return new Promise((resolve, reject)=>{
        let multi = factor1 * factor2
        if(multi > 0){
            reject('la calculadora solo puede devolver valores positivos')
        } else{
            resolve(multi)
        }
    })
}

const dividir = (dividiendo, divisor) => {
    return new Promise((resolve, reject)=>{ 
        if(divisor === 0){
            reject('No se pueden hacer divisiones entre cero')
        } else{
            resolve(dividiendo/divisor)       
        }
    })
}

